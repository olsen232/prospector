package xor.core;

import static xor.core.PixelConstants.*;

public class Font {
  public static Image RAW;
  
  public static Font WHITE;
  public static Font YELLOW;
  public static Font BROWN;
  public static Font BLACK;

  public static void startLoading() {
    RAW = Image.load("widefont.png");
  }

  public static void finishLoading() {
    WHITE = new Font(RAW.tile(FONT_SIZE));
    YELLOW =  new Font(RAW.recolor(MenuGfx.YELLOW).tile(FONT_SIZE));
    BROWN = new Font(RAW.recolor(MenuGfx.BROWN).tile(FONT_SIZE));
    BLACK = new Font(RAW.recolor(MenuGfx.BLACK).tile(FONT_SIZE));
  }
  
  public final Image[] images;

  public Font(Image[] images) {
    this.images = images;
  }
  
  public void drawChar(DrawImage target, char c, int x, int y) {
    int index = (int) (c - ' ');
    if (index >= 0 && index < images.length) {
      target.draw(images[index], x, y);
    }
  }
  
  public void singleLine(DrawImage target, CharSequence text, int sx, int sy) {
    int x = sx;
    for (int i = 0; i < text.length(); i++) {
      drawChar(target, text.charAt(i), x, sy);
      x += FONT_SIZE;
    }
  }

  public void leftAligned(DrawImage target, CharSequence text, int sx, int sy) {
    int x = sx, y = sy;
    for (int i = 0; i < text.length(); i++) {
      if (text.charAt(i) == '\n') {
        x = sx;
        y += FONT_SIZE;
        continue;
      }
      drawChar(target, text.charAt(i), x, y);
      x += FONT_SIZE;
    }
  }

  public void centeredSingleLine(DrawImage target, CharSequence text, int x, int y) {
    singleLine(target, text, x - (text.length() * FONT_SIZE / 2), y - (FONT_SIZE / 2));
  }
  
  public void centered(DrawImage target, CharSequence text, int sx, int sy) {
    int y = sy;
    int start = 0;
    for (int i = 0; i < text.length(); i++) {
      if (text.charAt(i) == '\n') {
        centeredSingleLine(target, text.subSequence(start, i), sx, y);
        y += FONT_SIZE;
        start = i + 1;
      }
    }
    centeredSingleLine(target, text.subSequence(start, text.length()), sx, y);
  }
  
  public void drawTextBox(Surface surface, CharSequence text, int x, int y, int w, int h, int color) {
    int numLines = count(text, '\n') + 1;
    surface.fillRect(x, y, w, h, 0xff000000);
    surface.drawRect(x, y, w, h, color);
    x = x + ((w + 1) / 2);
    y = y + ((h + 1) / 2) - (numLines * FONT_SIZE / 2) + (FONT_SIZE / 2); 
    centered(surface, text, x, y);
  }
  
  private static int count(CharSequence text, char c) {
    int count = 0;
    for (int i = 0; i < text.length(); i++) {
      if (text.charAt(i) == c) count += 1;
    }
    return count;
  }
}
