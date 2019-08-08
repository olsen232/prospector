package xor.core;

import playn.core.Key;

public enum Control {
  UP(Direction.UP, 'U'),
  DOWN(Direction.DOWN, 'D'),
  LEFT(Direction.LEFT, 'L'),
  RIGHT(Direction.RIGHT, 'R'),
  OK(null, 'x');

  public static final Control[] ALL_CONTROLS = Control.values();
  public static final int NUM_CONTROLS = ALL_CONTROLS.length;

  public final int code = this.ordinal();
  public final int bitCode = 1 << this.ordinal();

  public final Direction direction;
  public final char letter;

  Control(Direction direction, char letter) {
    this.direction = direction;
    this.letter = letter;
  }

  public static Control forKey(Key key) {
    switch (key) {
      case UP: 
      case W: 
        return UP;
      case DOWN:
      case S:
        return DOWN;
      case LEFT:
      case A:
        return LEFT;
      case RIGHT:
      case D:
        return RIGHT;
      case ENTER:
      case SPACE:
        return OK;
      default:
        return null;
    }
  }

  public static Control forLetter(char c) {
    switch (c) {
      case 'U': case 'u':
        return UP;
      case 'D': case 'd':
        return DOWN;
      case 'L': case 'l':
        return LEFT;
      case 'R': case 'r':
        return RIGHT;
      case 'X': case 'x':
        return OK;
      default:
        return null;
    }
  }
}
