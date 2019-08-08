package xor.core;

import playn.core.Key;

public enum ExtraControl {
  BACK,
  ZOOM_IN,
  ZOOM_OUT,
  FAST_FORWARD,
  SPECIAL,
  INTERRUPT,
  PLAY,
  LOAD,
  SAVE;

  public static final ExtraControl[] ALL_EXTRA_CONTROLS = ExtraControl.values();
  public static final int NUM_EXTRA_CONTROLS = ALL_EXTRA_CONTROLS.length;

  public final int code = this.ordinal();
  public final int bitCode = 1 << this.ordinal();

  public static ExtraControl forKey(Key key) {
    switch (key) {
      case ESCAPE:
        return BACK;
      case SHIFT:
        return FAST_FORWARD;
      case PLUS:
      case EQUALS:
      case RIGHT_BRACE:
      case RIGHT_BRACKET:
        return ZOOM_IN;
      case MINUS:
      case UNDERSCORE:
      case LEFT_BRACE:
      case LEFT_BRACKET:
        return ZOOM_OUT;
      case CONTROL:
        return SPECIAL;
      case C:
        return INTERRUPT;
      case P:
        return PLAY;
      case L:
      case O:
        return LOAD;
      case S:
        return SAVE;
      default:
        return null;
    }
  }
}
