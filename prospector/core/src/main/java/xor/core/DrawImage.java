package xor.core;

public interface DrawImage {
  public void draw(Image image, int x, int y);
  public void drawTile(Image image, int x, int y);
  public void fillRect(float x, float y, float w, float h, int color);
}
