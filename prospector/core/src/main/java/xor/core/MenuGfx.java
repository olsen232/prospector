package xor.core;

import static xor.core.PixelConstants.*;

import playn.core.Image;
import playn.core.Texture;
import playn.core.Platform;

public final class MenuGfx {
  private MenuGfx() {}

  public static final int YELLOW = 0xffeecc66;  // Was 0xffffdd77, added extra contrast.
  public static final int BROWN = 0xff885511;
  public static final int TRANSLUCENT_BROWN = 0x77772200;

  public static XorImage TITLE;

  public static XorImage[] WHITE_FONT;
  public static XorImage[] YELLOW_FONT;
  public static XorImage[] BROWN_FONT;
  public static XorImage[] DIGITS;
  public static XorImage GEARS;
  public static XorImage EDITOR_BUTTONS;

  public static void start() {
    Toolkit.start("widefont.png");
    Toolkit.start("title.png");
    Toolkit.start("digits.png");
    Toolkit.start("editorbuttons.png");
  }

  public static void loadTitle() {
    TITLE = Toolkit.getAsXor("title.png");
  }

  public static void loadFont() {
    XorImage rawFont = Toolkit.getAsXor("widefont.png");
    WHITE_FONT = Toolkit.tile(rawFont, FONT_SIZE);
    YELLOW_FONT = Toolkit.tile(Toolkit.recolor(rawFont, YELLOW), FONT_SIZE);
    BROWN_FONT = Toolkit.tile(Toolkit.recolor(rawFont, BROWN), FONT_SIZE);
  }

  public static void loadSidebar() {
    XorImage rawDigits = Toolkit.getAsXor("digits.png");
    DIGITS = Toolkit.tile(Toolkit.recolor(rawDigits, TRANSLUCENT_BROWN), DIGIT_WIDTH, DIGIT_HEIGHT);
    GEARS = new XorImage(new Image[] {
        gearSubImage(MOVES_DIAL_X, MOVES_DIAL_Y),
        gearSubImage(BALLOONS_DIAL_X, BALLOONS_DIAL_Y),
    });
    EDITOR_BUTTONS = Toolkit.getAsXor("editorbuttons.png");
  }

  private static Image gearSubImage(int dialX, int dialY) {
    return Toolkit.subImage(TITLE.variant(0), dialX + GEAR_X, dialY + GEAR_Y, GEAR_WIDTH, GEAR_HEIGHT);
  }
}
