package xor.core;

import playn.core.GL20;

public class Platform {
  public static Platform INSTANCE;

  public final playn.core.Platform raw;
  
  public final int zoom;
  
  public Platform(playn.core.Platform raw) {
    this.raw = raw;
    this.zoom = findZoom(raw.graphics());
    INSTANCE = this;
  }
  
  public void pixelate() {
    GL20 gl20 = raw.graphics().gl;
    gl20.glTexParameteri(GL20.GL_TEXTURE_2D, GL20.GL_TEXTURE_MIN_FILTER, GL20.GL_NEAREST);
    gl20.glTexParameteri(GL20.GL_TEXTURE_2D, GL20.GL_TEXTURE_MAG_FILTER, GL20.GL_NEAREST);
  }
    
  public playn.core.Canvas createRawCanvas(int pixelWidth, int pixelHeight) {
    return raw.graphics().createCanvas(pixelWidth, pixelHeight);
  }
  
  public Canvas createCanvas(int pixelWidth, int pixelHeight) {
    return new Canvas(createRawCanvas(pixelWidth, pixelHeight));
  }
  
  public void exit() {
    System.out.println("Exit");  // Platform can override
  }
  
  private static int findZoom(playn.core.Graphics graphics) {
    int widthZoom = (int) graphics.screenSize().width() * 9 / 10 / PixelConstants.SCREEN_WIDTH;
    int heightZoom = (int) graphics.screenSize().height() * 9 / 10 / PixelConstants.SCREEN_HEIGHT;
    int zoom = Math.min(widthZoom, heightZoom);
    return Math.max(1, zoom);
  }
}