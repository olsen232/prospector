package xor.core;

import xor.core.Cells.CellType;
import xor.core.Player.PlayerState;
import xor.core.Player.PlayerType;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Deque;
import java.util.EnumSet;

public class MazeState {

  private static final boolean BALLOON_CHEAT = Boolean.FALSE;

  enum State {
    WAITING_FOR_PLAYER,
    PLAYER_MOVING        (250),
    PLAYER_PUSHING_OBJECT(250),
    OBJECT_MOVING        (100),
    EXPLOSION            (500),
    SWITCHING_PLAYER     (500),
    PLAYER_DYING         (1500),
    LIGHTS_TOGGLING      (150),
    THROUGH_TELEPORT     (300),
    STUCK_IN_TELEPORT    (1000),
    LEVEL_FAILED         (250),
    LEVEL_COMPLETED      (250);

    public final int code = this.ordinal();
    public final int ms;

    State() {
      this.ms = 0;
    }

    State(int ms) {
      this.ms = ms;
    }
  }
  public static final int NUM_STATES = State.values().length;

  enum AdditionalEvent {
    NONE,
    BALLOON_COLLECTED,
    MAP_COLLECTED,
    OBJECT_STOPPED;

    public final int code = this.ordinal();
  }
  public static final int NUM_ADDITIONAL_EVENTS = AdditionalEvent.values().length;

  interface MazeStateListener {
    void onStateTransition(State oldState, State newState, AdditionalEvent event);
  }
 
  public final Player[] players;
  public final EnumSet<CellType> collectedMaps;
  public final Maze initialMaze;
  public final List<MazeStateListener> mazeStateListeners;
  private Maze maze;

  private State previousState;
  private State state;
  private AdditionalEvent additionalEvent;

  private int activePlayerIndex;
  private int activeObjectIndex;
  private Direction movement;

  private final Deque<Integer> currentStack;
  private final Deque<Integer> globalStack;

  private int requiredBalloons;
  private int collectedBalloons;
  private int collectedDecoys;
  private int pendingDecoys;

  public MazeState(Maze initialMaze) {
    this.players = new Player[Player.NUM_PLAYER_TYPES];
    int i = 0;
    for (PlayerType playerType : PlayerType.values()) {
      this.players[i++] = new Player(playerType);
    }
    collectedMaps = EnumSet.noneOf(CellType.class);
    currentStack = new ArrayDeque<Integer>();
    globalStack = new ArrayDeque<Integer>();
    mazeStateListeners = new ArrayList<MazeStateListener>();

    this.initialMaze = initialMaze;
    this.initialMaze.updateAllWalls();

    reset();
  }

  public void reset() {
    this.maze = initialMaze.clone();

    collectedMaps.clear();
    requiredBalloons = maze.countCellType(CellType.BALLOON);
    collectedBalloons = 0;
    pendingDecoys = collectedDecoys = 0;

    currentStack.clear();
    globalStack.clear();
    activeObjectIndex = -1;

    for (Player player : players) {
      player.reset(maze);
    }
    activePlayerIndex = findNextPlayerWithState(0, PlayerState.ALIVE);
    state = getSettledStateFromActivePlayer();
    previousState = state;
    additionalEvent = AdditionalEvent.NONE;
  }

  private State getSettledStateFromActivePlayer() {
    return (activePlayerIndex != -1) ? State.WAITING_FOR_PLAYER : State.LEVEL_FAILED;
  }

  public Maze maze() {
    return maze;
  }

  public int requiredBalloons() {
    return requiredBalloons;
  }

  private int findNextPlayerWithState(int startPlayer, PlayerState playerState) {
    if (startPlayer < 0) startPlayer = 0;
    for (int i = 0; i < players.length; i++) {
      int playerIndex = (startPlayer + i) % players.length;
      if (players[playerIndex].state() == playerState) {
        return playerIndex;
      }
    }
    return -1;
  }

  public boolean trySwitchPlayer() {
    if (state != State.WAITING_FOR_PLAYER) {
      return false;
    }
    beginPlayerInitiatedStateTransition();

    int nextPlayerIndex = findNextPlayerWithState(activePlayerIndex + 1, PlayerState.ALIVE);
    if (nextPlayerIndex != -1 && nextPlayerIndex != activePlayerIndex) {
      activePlayerIndex = nextPlayerIndex;
      resetPoses();
      completeStateTransition(State.SWITCHING_PLAYER);
      return true;
    }

    if (nextPlayerIndex == -1) {
      completeStateTransition(State.LEVEL_FAILED);
      return false;
    }
    cancelPlayerInitiatedStateTransition();
    return false;
  }

  public boolean tryMove(Direction d) {
    if (state != State.WAITING_FOR_PLAYER) {
      return false;
    }
    beginPlayerInitiatedStateTransition();

    Player player = getActivePlayer();
    int destX = d.dx(player.x());
    int destY = d.dy(player.y());

    CellType destCellType = maze.safeGetCellType(destX, destY);
    if (tryToEmpty(destX, destY, destCellType, d) || tryToCollect(destX, destY, destCellType)) {
      maze.updateCellType(destX, destY, CellType.EMPTY);
      player.startMove(d);
      completeStateTransition(State.PLAYER_MOVING);
      movement = d;
      return true;
    }
    if (isPushable(destX, destY, destCellType, d)) {
      int pushToX = d.dx(destX);
      int pushToY = d.dy(destY);
      CellType pushToCellType = maze.safeGetCellType(pushToX, pushToY);
      if (tryToEmpty(pushToX, pushToY, pushToCellType, d)) {
        maze.updateCellType(pushToX, pushToY, CellType.EMPTY);
        player.startMove(d);
        completeStateTransition(State.PLAYER_PUSHING_OBJECT);
        activeObjectIndex = maze.xyToIndex(destX, destY);
        movement = d;
        return true;
      }
    }

    if (destCellType == CellType.TELEPORT) {
      maze.updateCellType(player.x(), player.y(), CellType.EMPTY);
      enqueueUnsupportedNeighbours(player.x(), player.y(), d, true);
      resetPoses();
      startTeleportPlayerFrom(player, destX, destY);
      return true;
    }

    if (destCellType == CellType.EXIT && (collectedBalloons == requiredBalloons || BALLOON_CHEAT)) {
      maze.updateCellType(player.x(), player.y(), CellType.EMPTY);
      activePlayerIndex = -1;
      completeStateTransition(State.LEVEL_COMPLETED);
      return true;
    }
    cancelPlayerInitiatedStateTransition();
    return false;
  }

  public int getActivePlayerIndex() {
    return activePlayerIndex;
  }

  public Player getActivePlayer() {
    if (activePlayerIndex == -1) return null;
    return players[activePlayerIndex];
  }

  private void resetPoses() {
    for (Player player : players) {
      player.resetPose();
    }
  }

  public boolean isSettled() {
    return state == State.WAITING_FOR_PLAYER
        || state == State.LEVEL_FAILED
        || state == State.LEVEL_COMPLETED;
  }

  public State state() {
    return state;
  }

  public AdditionalEvent additionalEvent() {
    return additionalEvent;
  }

  public boolean areLightsOn() {
    return (collectedDecoys % 2) == 0;
  }

  public Direction movement() {
    return movement;
  }

  public void advanceToNextState() {
    if (isSettled()) {
      // Can't advance from settled states.
      return;
    }
    beginStateTransition();

    switch (previousState) {
      case SWITCHING_PLAYER:
        completeStateTransition(State.WAITING_FOR_PLAYER);
        break;

      case PLAYER_MOVING:
        completePlayerMove();
        break;

      case PLAYER_PUSHING_OBJECT:
        completeObjectMove();
        completePlayerMove();
        break;

      case OBJECT_MOVING:
        completeObjectMove();
        tryDestroyVictimOfFallingObject();
        break;

      case EXPLOSION:
        completeExplosion();
        break;

      case STUCK_IN_TELEPORT:
        reTeleport();
        break;
      case THROUGH_TELEPORT:
        break;

      case PLAYER_DYING:
        completePlayerDeath();
        break;

      case LIGHTS_TOGGLING:
        resetPoses();
        break;

      default:
        throw new UnsupportedOperationException();
    }
    if (isStateTransitionComplete()) return;

    advanceStateFromPendingActions();
    if (isStateTransitionComplete()) return;

    int lastActivePlayerIndex = activePlayerIndex;
    activePlayerIndex = findNextPlayerWithState(activePlayerIndex, PlayerState.ALIVE);
    if (activePlayerIndex != activePlayerIndex) resetPoses();

    completeStateTransition(getSettledStateFromActivePlayer());
  }

  private void beginPlayerInitiatedStateTransition() {
    if (state != State.WAITING_FOR_PLAYER) throw new IllegalStateException("Player cannot start transition from current state");
    beginStateTransition();
  }

  private void cancelPlayerInitiatedStateTransition() {
    if (state != null) throw new IllegalStateException("Cannot cancel state transition when state is already set");
    state = State.WAITING_FOR_PLAYER;
  }

  private void beginStateTransition() {
    if (state == null) throw new IllegalStateException("Cannot begin state transition from null state");
    previousState = state;
    state = null;
    additionalEvent = null;
  }

  private void addAdditionalEvent(AdditionalEvent newAdditionalEvent) {
    if (additionalEvent != null) throw new IllegalStateException("Cannot add more than one additional event");
    additionalEvent = newAdditionalEvent;
  }

  private void completeStateTransition(State newState) {
    if (state != null) throw new IllegalStateException("Cannot finish state transition when state is already set");
    if (additionalEvent == null) additionalEvent = AdditionalEvent.NONE;
    state = newState;
    notifyStateListeners();
  }

  private boolean isStateTransitionComplete() {
    return state != null;
  }

  private boolean isStateTransitionComplete(State expectedState) {
    if (state != null && state != expectedState) {
      throw new IllegalStateException("Arrived in unexpected state: " + state);
    }
    return state != null;
  }

  private void notifyStateListeners() {
    for (MazeStateListener listener : mazeStateListeners) {
      listener.onStateTransition(previousState, state, additionalEvent);
    }
  }

  private void completePlayerMove() {
    Player player = getActivePlayer();
    maze.updateCellType(player.x(), player.y(), CellType.EMPTY);
    enqueueUnsupportedNeighbours(player.x(), player.y(), player.movement(), true);

    player.completeMove();
    maze.updateCellType(player.x(), player.y(), player.cellType);
    // Add move to list of moves.
  }

  private void completePlayerDeath() {
    Player player = getActivePlayer();
    maze.updateCellType(player.x(), player.y(), CellType.EMPTY);
    enqueueUnsupportedNeighbours(player.x(), player.y(), null, true);  // Could give precedence to the wrong thing?
    player.completeDying();
  }

  private void completeObjectMove() {
    int x = getActiveObjectX();
    int y = getActiveObjectY();

    CellType activeObjectType = maze.updateCellType(x, y, CellType.EMPTY);
    if (previousState != State.PLAYER_PUSHING_OBJECT) {
      // This object moved out of a square which wasn't filled by the player:
      enqueueUnsupportedNeighbours(x, y, movement, false);
    }
    
    int destX = movement.dx(x);
    int destY = movement.dy(y);
    maze.updateCellType(destX, destY, activeObjectType);
    activeObjectIndex = maze.xyToIndex(destX, destY);
  }

  private void enqueueUnsupportedNeighbours(int x, int y, Direction emptiedInDirection, boolean isPlayer) {
    boolean emptiedInHorizontal = (emptiedInDirection != null && emptiedInDirection.isHorizontal());
    if (emptiedInHorizontal) {
      tryEnqueueUnsupportedNeighbour(x, y, Direction.RIGHT, isPlayer);
      tryEnqueueUnsupportedNeighbour(x, y, Direction.UP, isPlayer);
    } else {
      tryEnqueueUnsupportedNeighbour(x, y, Direction.UP, isPlayer);
      tryEnqueueUnsupportedNeighbour(x, y, Direction.RIGHT, isPlayer);
    }
  }

  private void tryEnqueueUnsupportedNeighbour(int x, int y, Direction d, boolean isPlayer) {
    x = d.dx(x);
    y = d.dy(y);
    CellType neighbour = maze.safeGetCellType(x, y);
    if (getFallingDirection(neighbour) == d.opposite()) {
      if (isPlayer) {
        globalStack.push(maze.xyToIndex(x, y));
      } else {
        currentStack.push(maze.xyToIndex(x, y));
      }
    }
  }

  private void advanceStateFromPendingActions() {
    if (isStateTransitionComplete()) return;
    startAnyPendingPlayerDeaths();
    
    if (isStateTransitionComplete()) return;
    collectAnyPendingDecoys();

    if (isStateTransitionComplete()) return;
    tryKeepActiveObjectMoving();

    if (isStateTransitionComplete()) return;
    tryLetAnyUnsupportedObjectFall();
  }

  private void startAnyPendingPlayerDeaths() {
    int dyingPlayer = findNextPlayerWithState(activePlayerIndex, PlayerState.DYING);
    if (dyingPlayer != -1) {
      activePlayerIndex = dyingPlayer;
      completeStateTransition(State.PLAYER_DYING);
    }
  }

  private void collectAnyPendingDecoys() {
    if (pendingDecoys > 0) {
      collectedDecoys++;
      pendingDecoys--;
      completeStateTransition(State.LIGHTS_TOGGLING);
    }
  }

  private void tryKeepActiveObjectMoving() {
    if (activeObjectIndex == -1) return;
    if (previousState != State.OBJECT_MOVING && previousState != State.PLAYER_PUSHING_OBJECT && previousState != State.PLAYER_DYING) {
      return;  // Nothing to keep moving.
    }

    int x = getActiveObjectX();
    int y = getActiveObjectY();
    CellType activeObjectType = maze.getCellType(x, y);

    if (activeObjectType == CellType.SPHERE) {
      int destX = movement.dx(x);
      int destY = movement.dy(y);
      if (!isBorder(destX, destY) && maze.getCellType(destX, destY) == CellType.EMPTY) {
        completeStateTransition(State.OBJECT_MOVING);
        return;
      } else {
        addAdditionalEvent(AdditionalEvent.OBJECT_STOPPED);
        return;
      }

    } else if (getFallingDirection(activeObjectType) != null) {
      tryLetObjectFall(x, y);
      if (isStateTransitionComplete(State.OBJECT_MOVING)) {
        return;
      } else if (previousState == State.OBJECT_MOVING) {
        addAdditionalEvent(AdditionalEvent.OBJECT_STOPPED);
      }
    }
  }

  private void tryLetAnyUnsupportedObjectFall() {
    Integer objectIndex = null;
    while ((objectIndex = currentStack.pollFirst()) != null) {
      globalStack.push(objectIndex);
    }

    while ((objectIndex = globalStack.pollFirst()) != null) {
      tryLetObjectFall(maze.indexToX(objectIndex), maze.indexToY(objectIndex));
      if (isStateTransitionComplete(State.OBJECT_MOVING)) {
        return;
      }
    }
  }

  private void tryLetObjectFall(int x, int y) {
    if (!isUnsupportedObject(x, y)) {
      return;
    }

    activeObjectIndex = maze.xyToIndex(x, y);
    movement = getFallingDirection(maze.getCellType(x, y));
    completeStateTransition(State.OBJECT_MOVING);
  }

  private boolean isUnsupportedObject(int x, int y) {
    CellType objectType = maze.getCellType(x, y);
    Direction d = getFallingDirection(objectType);
    if (d == null) {
      return false;
    }

    int destX = d.dx(x);
    int destY = d.dy(y);
    CellType destCellType = maze.safeGetCellType(destX, destY);
    if (tryToEmpty(destX, destY, destCellType, d)) {
      maze.updateCellType(destX, destY, CellType.EMPTY);
      return true;
    }
    return false;
  }

  public boolean isBorder(int x, int y) {
    return x <= 0 || y <= 0 || x >= maze.width - 1 || y >= maze.height - 1;
  }

  private boolean tryToEmpty(int x, int y, CellType cellType, Direction d) {
    if (isBorder(x, y)) return false;

    switch (cellType) {
      case EMPTY: return true;
      case FIELD_V: return d.isVertical();
      case FIELD_H: return d.isHorizontal();
      default: return false;
    }
  }

  private void tryDestroyVictimOfFallingObject() {
    if (previousState != State.OBJECT_MOVING) throw new IllegalStateException("Nothing falling!");

    int x = getActiveObjectX();
    int y = getActiveObjectY();
    Direction d = getFallingDirection(maze.getCellType(x, y));
    if (d == null) {
      return;
    }
    int destX = d.dx(x);
    int destY = d.dy(y);
    if (isBorder(destX, destY)) return;

    for (Player player : players) {
      if (player.isAlive() && player.x() == destX && player.y() == destY) {
        player.setState(PlayerState.DYING);
        return;
      }
    }

    CellType destCellType = maze.safeGetCellType(destX, destY);
    if (getExplosionDirections(destCellType) == null) {
      return;
    }

    for (Player player : players) {
      if (!player.isAlive()) continue;
      if (Math.abs(destX - player.x()) <= getExplosionDx(destCellType)
          && Math.abs(destY - player.y()) <= getExplosionDy(destCellType)) {
        player.setState(PlayerState.EXPLODING);
      }
    }

    maze.updateCellType(x, y, CellType.EMPTY);
    enqueueUnsupportedNeighbours(x, y, d, false);
    activeObjectIndex = maze.xyToIndex(destX, destY);
    completeStateTransition(State.EXPLOSION);
  }

  private void completeExplosion() {
    int x = getActiveObjectX();
    int y = getActiveObjectY();
    Direction[] explosionDirections = getExplosionDirections(maze.getCellType(x, y));
    maze.updateCellType(x, y, CellType.EMPTY);
    enqueueUnsupportedNeighbours(x, y, null, false);

    for (Direction d : explosionDirections) {
      int destX = d.dx(x);
      int destY = d.dy(y);
      if (isBorder(destX, destY)) continue;

      for (Player player : players) {
        if (player.state() == PlayerState.EXPLODING) {
          player.setState(PlayerState.DYING);
        }
      }

      CellType destroyedCellType = maze.updateCellType(destX, destY, CellType.EMPTY);
      if (destroyedCellType == CellType.DECOY) {
        pendingDecoys++;
      }
      
      enqueueUnsupportedNeighbours(destX, destY, null, false);
    }
  }

  private static final Direction[] TELEPORT_DIRECTIONS = new Direction[] {
    Direction.RIGHT, Direction.UP, Direction.LEFT, Direction.DOWN,
  };

  private void startTeleportPlayerFrom(Player player, int x, int y) {
    int inTeleportIndex = maze.xyToIndex(x, y);
    int outTeleportIndex = maze.findCellType(CellType.TELEPORT, inTeleportIndex + 1);
    int tx = maze.indexToX(outTeleportIndex);
    int ty = maze.indexToY(outTeleportIndex);
    for (Direction d : TELEPORT_DIRECTIONS) {
      int destX = d.dx(tx);
      int destY = d.dy(ty);
      if (!isBorder(destX, destY) && maze.safeGetCellType(destX, destY) == CellType.EMPTY) {
        player.teleportTo(destX, destY, /*stuck=*/ false);
        // Found a good spot to exit the teleport.
        maze.updateCellType(destX, destY, player.cellType);
        completeStateTransition(State.THROUGH_TELEPORT);
        return;
      }
    }
    // Stuck in teleport - will re-teleport next state.
    player.teleportTo(tx, ty, /*stuck=*/ true);
    completeStateTransition(State.STUCK_IN_TELEPORT);
  }

  private void reTeleport() {
    Player player = getActivePlayer();
    startTeleportPlayerFrom(player, player.x(), player.y());
  }

  private boolean tryToCollect(int x, int y, CellType cellType) {
    if (isBorder(x, y)) return false;

    switch (cellType) {
      case BALLOON:
        collectedBalloons++;
        addAdditionalEvent(AdditionalEvent.BALLOON_COLLECTED);
        return true;
      case DECOY:
        pendingDecoys++;
        return true;
      case MAP_NW:
      case MAP_NE:
      case MAP_SW:
      case MAP_SE:
        collectedMaps.add(cellType);
        addAdditionalEvent(AdditionalEvent.MAP_COLLECTED);
        return true;
      default:
        return false;
    }
  }

  public static Direction getFallingDirection(CellType cellType) {
     switch (cellType) {
      case ROCK:
      case DYNAMITE:
        return Direction.DOWN;
      case ZEPPELIN:
      case TIN_BOMB:
        return Direction.LEFT;
      default:
        return null;
    }
  }

  public static Direction[] getExplosionDirections(CellType cellType) {
     switch (cellType) {
      case DYNAMITE:
        return Direction.HORIZONTAL_DIRECTIONS;
      case TIN_BOMB:
        return Direction.VERTICAL_DIRECTIONS;
      default:
        return null;
    }
  }

  public static int getExplosionDx(CellType cellType) {
    return (cellType == CellType.DYNAMITE) ? 1 : 0;
  }

  public static int getExplosionDy(CellType cellType) {
    return (cellType == CellType.TIN_BOMB) ? 1 : 0;
  }

  private boolean isPushable(int x, int y, CellType cellType, Direction push) {
    if (isBorder(x, y)) return false;

    if (cellType == CellType.SPHERE) {
      return true;
    }
    Direction fallingDirection = getFallingDirection(cellType);
    if (fallingDirection == null) {
      return false;
    }
    return fallingDirection.isHorizontal() ^ push.isHorizontal();
  }

  public int getActiveObjectX() {
    return maze.indexToX(activeObjectIndex);
  }

  public int getActiveObjectY() {
    return maze.indexToY(activeObjectIndex);
  }

  public CellType getActiveObjectType() {
    if (activeObjectIndex == -1) return null;
    return Cells.cellType(maze.get(activeObjectIndex));
  }
}
