package xor.core;

import static xor.core.PixelConstants.*;

public final class MenuGfx {
  private MenuGfx() {}

  public static final int YELLOW = 0xffeecc66;  // Was 0xffffdd77, added extra contrast.
  public static final int BROWN = 0xff885511;
  public static final int TRANSLUCENT_BROWN = 0x77772200;

  public static Image TITLE;
  public static Image DIGITS_RAW;
  public static Image[] DIGITS;
  public static Image[] GEARS;
  public static Image EDITOR_BUTTONS;

  public static void startLoading() {
    TITLE = Image.load("title.png");
    DIGITS_RAW = Image.load("digits.png");
    EDITOR_BUTTONS = Image.load("editorbuttons.png");
  }

  public static void finishLoading() {
    DIGITS = DIGITS_RAW.recolor(TRANSLUCENT_BROWN).tile(DIGIT_WIDTH, DIGIT_HEIGHT);
    GEARS = new Image[] {
      gearSubImage(MOVES_DIAL_X, MOVES_DIAL_Y),
      gearSubImage(BALLOONS_DIAL_X, BALLOONS_DIAL_Y),
    };
  }

  private static Image gearSubImage(int dialX, int dialY) {
    return TITLE.subImage(dialX + GEAR_X, dialY + GEAR_Y, GEAR_WIDTH, GEAR_HEIGHT);
  }
}
