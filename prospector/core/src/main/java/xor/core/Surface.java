package xor.core;

import static xor.core.PixelConstants.FONT_SIZE;
import static xor.core.PixelConstants.TILE_SIZE;

public class Surface {

  public final playn.core.Surface raw;
  public float clipFactor = 1;

  public Surface(playn.core.Surface raw) {
    this.raw = raw;
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
        (int) (x * clipFactor),
        (int) (y * clipFactor),
        (int) (w * clipFactor),
        (int) (h * clipFactor));
  }

  public void endClipped() {
    raw.endClipped();
  }

  public void draw(Image image, int x, int y) {
    if (image == null) return;
    Platform.INSTANCE.pixelate();
    raw.draw(image.raw().texture(), x, y);
    Platform.INSTANCE.pixelate();
  }

  public void drawTile(Image tile, int x, int y) {
    draw(tile, x * TILE_SIZE, y * TILE_SIZE);
  }
  
  public void drawSlidingTile(Image tile, int x, int y, Direction movement, int percent) {
    if (tile == null) return;
    if (movement == null) {
      drawTile(tile, x, y);
    } else {
      int px = movement.tweenX(x * TILE_SIZE, percent, TILE_SIZE);
      int py = movement.tweenY(y * TILE_SIZE, percent, TILE_SIZE);
      draw(tile, px, py);
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
}


