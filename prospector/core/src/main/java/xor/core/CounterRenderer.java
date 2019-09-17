package xor.core;

import static xor.core.PixelConstants.*;

import xor.core.Cells.CellType;
import xor.core.MazeState.AdditionalEvent;
import xor.core.MazeState.MazeStateListener;
import xor.core.MazeState.State;

public class CounterRenderer implements MazeStateListener {

  public final MazeState mazeState;

  private int moves;
  private int requiredBalloons;

  private int deltaMoves = 0;
  private int deltaRequiredBalloons = 0;

  private Image stateIcon = Sprites.ROCK_EYES[1];
  private int stateIconOffset = 0;

  public CounterRenderer(MazeState mazeState) {
    this.mazeState = mazeState;
    mazeState.mazeStateListeners.add(this);
  }

  public void reset() {
    this.moves = 0;
    this.requiredBalloons = mazeState.requiredBalloons();

    this.deltaMoves = this.deltaRequiredBalloons = 0;
    
    updateStateIcon();
  }

  public Maze maze() {
    return mazeState.maze();
  }

  public int moves() {
    return moves;
  }

  public void onStateTransition(State oldState, State newState, AdditionalEvent event) {
    moves += deltaMoves;
    deltaMoves = 0;

    requiredBalloons += deltaRequiredBalloons;
    deltaRequiredBalloons = 0;

    if (oldState == State.WAITING_FOR_PLAYER && newState != State.WAITING_FOR_PLAYER) {
      deltaMoves = 1;
    }
    
    if (event == AdditionalEvent.BALLOON_COLLECTED) {
      deltaRequiredBalloons = -1;
    }
    updateStateIcon();
  }

  public void renderMoves(Surface surface, int percent) {
    render(4, MOVES_DIAL_X, MOVES_DIAL_Y, moves, deltaMoves, percent, surface);
  }

  public void renderBalloons(Surface surface, int percent) {
    render(2, BALLOONS_DIAL_X, BALLOONS_DIAL_Y, requiredBalloons, deltaRequiredBalloons, percent, surface);
  }

  public Image stateIcon() {
    return stateIcon;
  }

  public int stateIconOffset() {
    return stateIconOffset;
  }

  private void render(int numDigits, int x, int y, int start, int delta, int percent, Surface surface) {
    x += DIAL_WIDTH * (numDigits - 1);

    int end = start + delta;
    if (delta < 0) {
      start = end;
      end = start - delta;
      percent = 99 - percent;
    }
    int yDelta = DIAL_HEIGHT * percent / 100;

    for (int i = 0; i < numDigits; i++) {
      int startDigit = start % 10;
      int endDigit = end % 10;

      if (startDigit == endDigit) {
        surface.draw(MenuGfx.DIGITS[startDigit], x + DIGIT_X, y + DIGIT_Y);
        int gear = (i + startDigit) % MenuGfx.GEARS.length;
        surface.draw(MenuGfx.GEARS[gear], x + GEAR_X, y + GEAR_Y);

      } else {
        surface.startClipped(x, y + 7, DIAL_WIDTH, DIAL_HEIGHT - 7);
        surface.draw(MenuGfx.DIGITS[startDigit], x + DIGIT_X, y + DIGIT_Y - yDelta);
        surface.draw(MenuGfx.DIGITS[endDigit], x + DIGIT_X, y + DIAL_HEIGHT + DIGIT_Y - yDelta);
        surface.endClipped();

        int gear = (i + startDigit + Animator.SPRITE.signal) % MenuGfx.GEARS.length;
        surface.draw(MenuGfx.GEARS[gear], x + GEAR_X, y + GEAR_Y);
      }
      start /= 10;
      end /= 10;
      x -= DIAL_WIDTH;
    }
  }

  private void updateStateIcon() {
    if (mazeState.state() == State.LEVEL_COMPLETED) {
      stateIcon = Sprites.CELLS[CellType.BALLOON.code];
    } else if (mazeState.state() == State.LEVEL_FAILED) {
      stateIcon = Sprites.CELLS[CellType.DECOY.code];
    } else {
      Player player = mazeState.getActivePlayer();
      if (player != null) {
        stateIcon = Sprites.CELLS[player.cellType.code];
      }
    }
    stateIconOffset = 1;
  }
}
