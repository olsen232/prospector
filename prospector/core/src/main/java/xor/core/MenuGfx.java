package xor.core;

import static xor.core.PixelConstants.*;

public final class MenuGfx {
  private MenuGfx() {}

  public static final int YELLOW = 0xffeecc66;  // Was 0xffffdd77, added extra contrast.
  public static final int BROWN = 0xff885511;
  public static final int TRANSLUCENT_BROWN = 0x77772200;

  public static Image TITLE;

  public static Image FONT_RAW;
  public static Image[] WHITE_FONT;
  public static Image[] YELLOW_FONT;
  public static Image[] BROWN_FONT;
  public static Image DIGITS_RAW;
  public static Image[] DIGITS;
  public static Image GEARS;
  public static Image EDITOR_BUTTONS;

  public static void startLoading() {
    FONT_RAW = Loader.loadImage("widefont.png");
    TITLE = Loader.loadImage("title.png");
    DIGITS_RAW = Loader.loadImage("digits.png");
    EDITOR_BUTTONS = Loader.loadImage("editorbuttons.png");
  }

  public static void finishLoadingFont() {
    WHITE_FONT = FONT_RAW.tile(FONT_SIZE);
    YELLOW_FONT = FONT_RAW.recolor(YELLOW).tile(FONT_SIZE);
    BROWN_FONT = FONT_RAW.recolor(BROWN).tile(FONT_SIZE);
  }

  public static void finishLoading() {
    DIGITS = DIGITS_RAW.recolor(TRANSLUCENT_BROWN).tile(DIGIT_WIDTH, DIGIT_HEIGHT);
    GEARS = gearSubImage(MOVES_DIAL_X, MOVES_DIAL_Y);
    //new Image(new Image[] {
        //gearSubImage(MOVES_DIAL_X, MOVES_DIAL_Y),
        //gearSubImage(BALLOONS_DIAL_X, BALLOONS_DIAL_Y),
    //});
  }

  private static Image gearSubImage(int dialX, int dialY) {
    return TITLE.subImage(dialX + GEAR_X, dialY + GEAR_Y, GEAR_WIDTH, GEAR_HEIGHT);
  }
}
