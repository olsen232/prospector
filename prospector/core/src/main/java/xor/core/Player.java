package xor.core;

import xor.core.Cells.CellType;

public class Player {

  enum PlayerState {
    ALIVE,
    EXPLODING,
    DYING,
    DEAD,
    TELEPORTING;
  }

  enum PlayerType {
    HERB(CellType.HERB),
    PIP(CellType.PIP);

    public final CellType cellType;
    public final int code = this.ordinal();

    PlayerType(CellType cellType) {
      this.cellType = cellType;
    }
  }

  public static final PlayerType[] ALL_PLAYER_TYPES = PlayerType.values();
  public static final int NUM_PLAYER_TYPES = ALL_PLAYER_TYPES.length;
  public static final int POSE_CHANGES_PER_MOVE = 3;

  public final PlayerType playerType;
  public final int code;
  public final CellType cellType;

  private PlayerState state;
  private Pose pose;
  private int x;
  private int y;
  private Direction movement;

  public Player(PlayerType playerType) {
    this.playerType = playerType;
    this.code = playerType.code;
    this.cellType = playerType.cellType;
  }

  public void reset(Maze maze) {
    int index = maze.findCellType(playerType.cellType);
    boolean isFoundInMaze = index >= 0;
    if (isFoundInMaze) {
      reset(maze.indexToX(index), maze.indexToY(index), PlayerState.ALIVE);
    } else {
      reset(0, 0, PlayerState.DEAD);
    }
  }

  public void reset(int x, int y, PlayerState state) {
    this.state = state;
    resetPose();
    this.x = x;
    this.y = y;
    this.movement = null;
  }

  public void resetPose() {
    this.pose = Pose.CENTER;
  }

  public void setState(PlayerState state) {
    this.state = state;
  }

  public PlayerType playerType() { return playerType; }
  public PlayerState state() { return state; }
  public Pose pose() { return pose; }
  public int x() { return x; }
  public int y() { return y; }
  public Direction movement() { return movement; }
  public boolean isAlive() { return state == PlayerState.ALIVE; }

  public Pose pose(int percent) {
    if (movement == null) {
      return pose;
    }
    int doubleFrame = percent * 6 / 100;  // In range 0 - 5.
    int frame = (doubleFrame + 1) / 2;    // In range 0, 1, 1, 2, 2, 3.
    return pose.getNextPose(movement, frame);
  }

  public void startMove(Direction movement) {
    if (this.movement != null) throw new IllegalStateException();
    this.movement = movement;
  }

  public void completeMove() {
    if (this.movement == null) throw new IllegalStateException();
    x = movement.dx(x);
    y = movement.dy(y);
    pose = pose.getNextPose(movement, POSE_CHANGES_PER_MOVE);
    movement = null;
  }

  public void teleportTo(int x, int y, boolean stuck) {
    this.x = x;
    this.y = y;
    this.state = stuck ? PlayerState.TELEPORTING : PlayerState.ALIVE;
  }

  public void completeDying() {
    if (this.state != PlayerState.DYING) throw new IllegalStateException();
    this.state = PlayerState.DEAD;
  }

  enum Pose {
    CENTER,
    UP,
    DOWN,
    LEFT,
    RIGHT,
    HALF_LEFT,
    HALF_RIGHT;

    public final int code = this.ordinal();
    private final Pose[] transitions = new Pose[Direction.NUM_DIRECTIONS];

    static {
      addTransitionChain(Direction.DOWN, UP, CENTER, DOWN);
      addTransitionChain(Direction.RIGHT, LEFT, HALF_LEFT, CENTER, HALF_RIGHT, RIGHT);

      addOneWayTransitionChain(Direction.UP, LEFT, HALF_LEFT, UP);
      addOneWayTransitionChain(Direction.DOWN, LEFT, HALF_LEFT, DOWN);

      addOneWayTransitionChain(Direction.UP, RIGHT, HALF_RIGHT, UP);
      addOneWayTransitionChain(Direction.DOWN, RIGHT, HALF_RIGHT, DOWN);

      UP.addTransition(Direction.LEFT, HALF_LEFT);
      UP.addTransition(Direction.RIGHT, HALF_RIGHT);
      DOWN.addTransition(Direction.LEFT, HALF_LEFT);
      DOWN.addTransition(Direction.RIGHT, HALF_RIGHT);

      UP.addTransition(Direction.UP, UP);
      DOWN.addTransition(Direction.DOWN, DOWN);
      LEFT.addTransition(Direction.LEFT, LEFT);
      RIGHT.addTransition(Direction.RIGHT, RIGHT);
      checkAllTransitions();
    }

    public Pose getNextPose(Direction d) {
      return transitions[d.ordinal()];
    }

    public Pose getNextPose(Direction d, int steps) {
      if (steps == 0 || getNextPose(d) == this) {
        return this;
      }
      return getNextPose(d).getNextPose(d, steps - 1);
    }

    private void addTransition(Direction d, Pose nextPose) {
      if (transitions[d.ordinal()] != null) throw new IllegalStateException();
      transitions[d.ordinal()] = nextPose;
    }

    private static void addTransitionChain(Direction d, Pose... poses) {
      for (int i = 0; i < poses.length - 1; i++) {
        poses[i].addTransition(d, poses[i + 1]);
        poses[i + 1].addTransition(d.opposite(), poses[i]);
      }
    }

    private static void addOneWayTransitionChain(Direction d, Pose... poses) {
      for (int i = 0; i < poses.length - 1; i++) {
        poses[i].addTransition(d, poses[i + 1]);
      }
    }

    private static void checkAllTransitions() {
      for (Pose p : Pose.values()) {
        for (Direction d : Direction.values()) {
          if (p.getNextPose(d) == null) throw new NullPointerException("pose=" + p + " direction=" + d);
        }
      }
    }
  }

  public static final Pose[] ALL_POSES = Pose.values();
  public static final int NUM_POSES = ALL_POSES.length;
}






