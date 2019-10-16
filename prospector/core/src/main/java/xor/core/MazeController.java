package xor.core;

import static xor.core.PixelConstants.*;
import xor.core.MazeState.AdditionalEvent;
import xor.core.MazeState.State;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;

public class MazeController {

  private static final int MIN_WARP_SPEED = 2;
  private static final int MAX_WARP_SECONDS = 5;
  private static final int[] VIEWPORT_SIZES = new int[]{8, 10, 12, 16, 32};

  public final MazeState mazeState;
  public final ControlState controlState;
  public final InGameMazeRenderer mazeRenderer;
  public final MapRenderer mapRenderer;
  public final CounterRenderer counterRenderer;

  public final Viewport[] viewports;
  private int activeViewportIndex;
  public ByteArrayOutputStream movesOut;
  public ByteArrayInputStream movesIn;
  private int lastReplayLength = 0; 
  private int warpTo = 0;

  private String dialogText;
  private int msInCurrentState = 0;
  private int viewportSizeIndex = 0;

  private int speedUp = 1;
  private int superSpeedUp = 0;
  private boolean active = false;
  private boolean wasActive = false;

  public final GameOverCallback callback;

  interface GameOverCallback {
    void onGameOver(int newHighscore);
  }

  public MazeController() {
    this(new Maze(), new ControlState(), null);
  }

  public MazeController(Maze maze) {
    this(maze, new ControlState(), null);
  }

  public MazeController(Maze maze, ControlState controlState) {
    this(maze, controlState, null);
  }
  
  public MazeController(Maze initialMaze, ControlState controlState, GameOverCallback callback) {
    this.mazeState = new MazeState(initialMaze);
    this.controlState = controlState;
    this.mazeRenderer = new InGameMazeRenderer(mazeState);
    this.mapRenderer = new MapRenderer(mazeState);
    this.counterRenderer = new CounterRenderer(mazeState);
    this.viewports = new Viewport[Player.NUM_PLAYER_TYPES];
    mazeState.mazeStateListeners.add(Sounds.SOUND_EFFECTS_PLAYER);
    
    for (int i = 0; i < viewports.length; i++) {
      viewports[i] = new Viewport(initialMaze, VIEWPORT_SIZES[viewportSizeIndex], mazeState.players[i]);
    }
    centerOnPlayers();
    activeViewportIndex = 0;
    movesOut = new ByteArrayOutputStream();

    this.callback = callback;
  }

  public void centerOnPlayers() {
    for (int i = 0; i < viewports.length; i++) {
      viewports[i].centerOnPlayer(mazeState.players[i]);
    }
  }

  public void reset() {
    mazeState.reset();
    mapRenderer.reset();
    counterRenderer.reset();
    centerOnPlayers();
    activeViewportIndex = 0;
    active = true;
    wasActive = true;
  }

  public Maze maze() {
    return mazeState.maze();
  }

  public boolean isActive() {
    return active;
  }

  public boolean wasActive() {
    return wasActive;
  }


  public void setActive(boolean active) {
    this.active = active;
  }

  public Player getActivePlayer() {
    return mazeState.getActivePlayer();
  }

  public int getActiveViewportIndex() {
    int activePlayerIndex = mazeState.getActivePlayerIndex();
    if (activePlayerIndex >= 0) {
      activeViewportIndex = activePlayerIndex;
    }
    return activeViewportIndex;
  }

  public Viewport getActiveViewport() {
    return viewports[getActiveViewportIndex()];
  }

  private void handleControls() {
    if (controlState.isFresh(Control.OK)) {
      if (hasDialog()) {
        dismissDialog();
      } else {
        tryAct(Control.OK);
      }
    } else if (!hasDialog()) {
      Control c = controlState.onlyPressedControl();
      if (c != null && c != Control.OK) {
        tryAct(c);
      } else if (controlState.isFreshStateIconClick()) {
        tryAct(Control.OK);
      }
    }
  }

  private void handleExtraControls() {
    if (controlState.isFresh(ExtraControl.BACK)) {
      if (isReplaying()) {
        abortReplay();
      } else if (hasDialog()) {
        dismissDialog();
      } else {
        setActive(false);
      }
    }
    if (hasDialog() && controlState.isFresh(Control.OK)) {
      dismissDialog();
    }
    if (isReplaying() && controlState.isFresh(ExtraControl.INTERRUPT)) {
      abortReplay();
    }

    if (controlState.isFresh(ExtraControl.ZOOM_IN)) {
      adjustViewportSize(-1);
    } else if (controlState.isFresh(ExtraControl.ZOOM_OUT)) {
      adjustViewportSize(1);
    }
  }

  private boolean tryAct(Control c) {
    if (isGameOver()) return false;

    boolean result = mazeState.tryAct(c);
    if (result) {
      msInCurrentState = 0;
      movesOut.write(c.letter);
    }
    return result;
  }

  public void startReplay() {
    if (isReplaying() && movesOut.size() < 10 && lastReplayLength > movesOut.size()) {
      warpTo = lastReplayLength;
    }

    if (isReplaying()) return;
    if (movesOut.size() == 0) return;
    reset();
    warpTo = 0;
    movesIn = new ByteArrayInputStream(movesOut.toByteArray());
    movesOut = new ByteArrayOutputStream();
    dialogText = null;
  }

  public void abortReplay() {
    dialogText = "REPLAY INTERRUPT";
    lastReplayLength = movesOut.size();
    movesIn = null;
  }

  public boolean isGameOver() {
    return (mazeState.state() == State.LEVEL_FAILED || mazeState.state() == State.LEVEL_COMPLETED);
  }

  public void setDialogText(String dialogText) {
    this.dialogText = dialogText;
  }

  public boolean hasDialog() {
    return dialogText() != null;
  }

  private String dialogText() {
    if (!isActive()) return null;
    if (mazeState.state() == State.LEVEL_FAILED) {
      return "You failed!";
    } else if (mazeState.state() == State.LEVEL_COMPLETED) {
      return "Congratulations!";
    }
    return dialogText;
  }

  public void dismissDialog() {
    dialogText = null;
    if (isGameOver()) {
      active = false;
    }
  }

  public void renderDialog(Surface surface) {
    if (dialogText() != null) {
      Font.BROWN.drawTextBox(surface, dialogText(), DIALOG_X, DIALOG_Y, DIALOG_WIDTH, DIALOG_HEIGHT, MenuGfx.BROWN);
    }
  }

  public Image renderMap() {
    if (!isActive()) return null;
    return mapRenderer.map();
  }

  public Image stateIcon() {
    return counterRenderer.stateIcon();
  }

  public int stateIconOffset() {
    return counterRenderer.stateIconOffset();
  }

  public void renderMovesCounter(Surface surface, int deltaMs) {
    counterRenderer.renderMoves(surface, percent(deltaMs));
  }

  public void renderBalloonsCounter(Surface surface, int deltaMs) {
    counterRenderer.renderBalloons(surface, percent(deltaMs));
  }

  private int percent(int deltaMs) {
    int totalMsForCurrentState = mazeState.state().ms;
    if (totalMsForCurrentState == 0) {
      return 0;
    }
    return Ints.clamp(100 * (msInCurrentState + speedUp * deltaMs) / totalMsForCurrentState, 0, 99);
  }

  public boolean isReplaying() {
    return movesIn != null;
  }

  public void tick(int ms) {
    handleExtraControls();
    chooseSpeedUp(ms);

    if (isReplaying() && superSpeedUp > 0) {
      replayNextMoves(superSpeedUp);
      checkForGameOver();
      return;
    }
      
    msInCurrentState += speedUp * ms;
    if (isGameOver()) return;

    int totalMsForCurrentState = mazeState.state().ms;
    if (totalMsForCurrentState > 0 && msInCurrentState >= totalMsForCurrentState) {
      mazeState.advanceToNextState();
      while(isStateSkippable()) {
        mazeState.advanceToNextState();
      }
      msInCurrentState -= totalMsForCurrentState;
      totalMsForCurrentState = mazeState.state().ms;
      if (totalMsForCurrentState > 0) {
        msInCurrentState = Math.min(msInCurrentState, totalMsForCurrentState / 2);
      }
    }
    
    if (isReplaying()) {
      tryStartReplayOneMove();
    } else {
      handleControls();
    }

    checkForGameOver();
    followPlayer();
  }

  private void checkForGameOver() {
    if (isGameOver() && callback != null) {
      callback.onGameOver(
          mazeState.state() == State.LEVEL_COMPLETED ? movesOut.size() : Integer.MAX_VALUE);
    }
    if (isGameOver() && isReplaying()) {
      lastReplayLength = movesOut.size();
      movesIn = null;
    }
  }

  public void replayNextMoves(int numMoves) {
    while (isReplaying() && numMoves > 0) {
      tryStartReplayOneMove();
      advanceUntilSettled();
      numMoves--;
    }
  }

  private void tryStartReplayOneMove() {
    if (!isReplaying() || !mazeState.isSettled() || isGameOver()) {
      return;
    }
    if (warpTo > 0 && movesOut.size() >= warpTo) {
      dialogText = "REPLAY REPLAYED";
      movesIn = null;
      return;
    }

    Control control = null;
    while (control == null) {
      int letter = movesIn.read();
      if (letter == -1) {
        movesIn = null;  // No more moves to replay.
        lastReplayLength = movesOut.size();
        return;
      }
      control = Control.forLetter((char) letter);
    }
      
    if (!tryAct(control)) {
      dialogText = "REPLAY INVALID";
      movesIn = null;
      return;
    }
    followPlayer();
  }

  private void advanceUntilSettled() {
    while (!mazeState.isSettled()) {
      mazeState.advanceToNextState();
      followPlayer();
    }
  }

  private void followPlayer() {
    getActiveViewportIndex();
    viewports[activeViewportIndex].followPlayer(mazeState.players[activeViewportIndex]);
  }

  private void chooseSpeedUp(int ms) {
    if (isReplaying()) {
      if (warpTo > 0) {
        chooseWarpSpeedUp(warpTo, ms);
      } else {
        speedUp = 2;
        superSpeedUp = isFastForward() ? 1 : 0;
      }
    } else {
      speedUp = isFastForward() ? 2 : 1;
      superSpeedUp = 0;
    }
  }

  private boolean isFastForward() {
    return controlState.isPressed(ExtraControl.FAST_FORWARD);
  }

  private void chooseWarpSpeedUp(int replayLength, int ms) {
    speedUp = 4;
    superSpeedUp = replayLength * ms / (MAX_WARP_SECONDS * 1000);
    superSpeedUp = Math.max(superSpeedUp, MIN_WARP_SPEED);
  }

  public void adjustViewportSize(int delta) {
    viewportSizeIndex = Ints.clamp(viewportSizeIndex + delta, 0, VIEWPORT_SIZES.length - 1);
    for (int i = 0; i < viewports.length; i++) {
      viewports[i].resize(VIEWPORT_SIZES[viewportSizeIndex], mazeState.players[i]);
    }
  }

  public void render(Surface surface, int deltaMs) {
    mazeRenderer.renderRect(getActiveViewport(), percent(deltaMs), surface);
    renderDialog(surface);
  }

  private boolean isStateSkippable() {
    if (mazeState.state() != State.OBJECT_MOVING) return false;
    if (mazeState.additionalEvent() != AdditionalEvent.NONE) return false;
    int activeObjectX = mazeState.getActiveObjectX();
    int activeObjectY = mazeState.getActiveObjectY();
    Viewport viewport = getActiveViewport();
    if (viewport.isMoving()) return false;
    if (viewport.contains(activeObjectX, activeObjectY)) return false;
    Direction d = mazeState.movement();
    if (viewport.contains(d.dx(activeObjectX), d.dy(activeObjectY))) return false;
    return true;
  }
}

