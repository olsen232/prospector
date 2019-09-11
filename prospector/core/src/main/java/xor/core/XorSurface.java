package xor.core;

import static xor.core.PixelConstants.FONT_SIZE;
import static xor.core.PixelConstants.TILE_SIZE;
import static xor.core.PixelConstants.ZOOM;

import playn.core.Image;
import playn.core.Surface;

public class XorSurface {

  public final playn.core.Surface raw;
  public int mapVariant = 0;
  public int spriteVariant = 0;
  public float scaleFactor = 1;

  public XorSurface(playn.core.Surface raw) {
    this.raw = raw;
  }

  public void setVariants(int frame, int msPerFrame) {
    mapVariant = mapVariant(frame, msPerFrame);
    spriteVariant = spriteVariant(frame, msPerFrame);
  }
  
  public void begin() { raw.begin(); }
  public void end() { raw.end(); }
  public void saveTx() { raw.saveTx(); }
  public void restoreTx() { raw.restoreTx(); }
  
  public void clear(float r, float g, float b, float a) {
    raw.clear(r, g, b, a);
  }
  
  public void scale(float x, float y) {
    raw.scale(x, y);
  }

  public void translate(int x, int y) {
    raw.translate(x, y);
  }

  public void startClipped(int x, int y, int w, int h) {
    raw.startClipped(
        (int) (x * ZOOM * scaleFactor),
        (int) (y * ZOOM * scaleFactor),
        (int) (w * ZOOM * scaleFactor),
        (int) (h * ZOOM * scaleFactor));
  }

  public void endClipped() {
    raw.endClipped();
  }

  public void draw(Image image, int x, int y) {
    if (image != null) {
      raw.draw(image.texture(), x, y);
    }
  }

  public void drawImage(XorImage image, int x, int y) {
    if (image != null) {
      draw(image.variant(0), x, y);
    }
  }

  public void drawSpriteImage(XorImage image, int x, int y) {
    if (image != null) {
      draw(image.variant(spriteVariant), x, y);
    }
  }

  public void drawMapImage(XorImage image, int x, int y) {
    if (image != null) {
      draw(image.variant(mapVariant), x, y);
    }
  }

  public void drawMapTile(XorImage tile, int x, int y) {
    drawMapImage(tile, x * TILE_SIZE, y * TILE_SIZE);
  }

  public void drawSpriteTile(XorImage tile, int x, int y) {
    drawSpriteImage(tile, x * TILE_SIZE, y * TILE_SIZE);
  }

  public void animateSpriteTile(XorImage[] animation, int x, int y, int repeats, int percent) {
    if (animation == null) return;
    int frame = (animation.length * repeats * percent / 100) % animation.length;
    drawSpriteTile(animation[frame], x, y);
  }

  public void drawSlidingSpriteTile(XorImage tile, int x, int y, Direction movement, int percent) {
    if (tile == null) return;
    if (movement == null) {
      drawSpriteTile(tile, x, y);
    } else {
      int px = movement.tweenX(x * TILE_SIZE, percent, TILE_SIZE);
      int py = movement.tweenY(y * TILE_SIZE, percent, TILE_SIZE);
      drawSpriteImage(tile, px, py);
    }
  }

  public void drawText(XorImage[] font, String text, int x, int y) {
    for (int i = 0; i < text.length(); i++) {
      char c = text.charAt(i);
      int index = (int) (c - ' ');
      if (index >= 0 && index < font.length) {
        drawImage(font[index], x, y);
        x += FONT_SIZE;
      }
    }
  }

  public void drawTextWithNewLines(XorImage[] font, String text, int x, int y) {
    String[] lines = text.split("\n");
    for (String line : lines) {
      drawText(font, line, x, y);
      y += FONT_SIZE;
    }
  }

  public void drawCenteredText(XorImage[] font, String text, int x, int y) {
    drawText(font, text, x - (text.length() * FONT_SIZE / 2), y - (FONT_SIZE / 2));
  }

  public void drawTextBox(XorImage[] font, String text, int x, int y, int w, int h, int color) {
    String[] lines = text.split("\n");
    fillRect(x, y, w, h, 0xff000000);
    drawRect(x, y, w, h, color);
    x = x + ((w + 1)/2);
    y = y + ((h + 1)/2) - (lines.length * FONT_SIZE / 2) + (FONT_SIZE / 2); 
    for (int l = 0; l < lines.length; l++) {
      drawCenteredText(font, lines[l], x, y);
      y += FONT_SIZE;
    }
  }

  public void drawRect(int x, int y, int w, int h, int color) {
    float r = 0.5f;
    fillRect(x - r, y - r, w + 1, 1, color);
    fillRect(x - r, y - r, 1, h + 1, color);
    fillRect(x - r, y + h - r, w + 1, 1, color);
    fillRect(x + w - r, y - r, 1, h + 1, color);
  }

  public void fillRect(float x, float y, float w, float h, int color) {
   raw.setFillColor(color);
   raw.fillRect(x, y, w, h);
  }

  public static int mapVariant(int frame, int msPerFrame) {
    return frame / Math.max(1, 400 / msPerFrame);
  }

  public static int spriteVariant(int frame, int msPerFrame) {
    return frame / Math.max(1, 200 / msPerFrame);
  }
}


