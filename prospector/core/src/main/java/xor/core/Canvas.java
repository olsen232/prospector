package xor.core;

import static xor.core.PixelConstants.*;

public class Canvas {
  public final playn.core.Canvas raw;
  public final Image image;
  
  public Canvas(playn.core.Canvas raw) {
    this.raw = raw;
    this.image = new Image(raw.image);
  }
  
  public void clear() { raw.clear(); }
  
  public void scale(int x, int y) {
    raw.scale(x, y);
  }
  
  public void draw(Image image, int x, int y) {
    raw.draw(image.raw, x, y);
  }
  
  public void fillRect(int x, int y, int w, int h, int color) {
    raw.setFillColor(color);
    raw.fillRect(x, y, w, h);
  }
  
  public void strokeRect(int x, int y, int w, int h, int color) {
    raw.setFillColor(color);
    raw.fillRect(x, y, w, 1);
    raw.fillRect(x, y + h - 1, w, 1);
    raw.fillRect(x, y, 2, h);
    raw.fillRect(x + w - 2, y, 2, h);
  }
  
  public Image snapshot() {
    return new Image(raw.snapshot());
  }
}
