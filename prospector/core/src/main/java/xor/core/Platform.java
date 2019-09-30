package xor.core;

import playn.core.GL20;
import pythagoras.f.IDimension;

public class Platform {
  public static Platform INSTANCE;

  public final playn.core.Platform raw;
  
  public final float zoom;
  
  public Platform(playn.core.Platform raw) {
    this.raw = raw;
    this.zoom = findZoom();
    this.setSize((int) (PixelConstants.SCREEN_WIDTH * zoom), (int) (PixelConstants.SCREEN_HEIGHT * zoom));
    INSTANCE = this;
  }
  
  public void pixelate() {
    GL20 gl20 = raw.graphics().gl;
    gl20.glTexParameteri(GL20.GL_TEXTURE_2D, GL20.GL_TEXTURE_MIN_FILTER, GL20.GL_NEAREST);
    gl20.glTexParameteri(GL20.GL_TEXTURE_2D, GL20.GL_TEXTURE_MAG_FILTER, GL20.GL_NEAREST);
  }

  public void setSize(int width, int height) {
    System.out.println("setSize(" + width + ", " + height + ")");  // Platform can override.
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
  
  public IDimension availableArea() {
    return raw.graphics().screenSize();
  }
  
  public float findZoom() {
    if (Boolean.TRUE) return 3;
    IDimension availableArea = availableArea();
    float widthZoom = availableArea.width() / PixelConstants.SCREEN_WIDTH;
    float heightZoom = availableArea.height() / PixelConstants.SCREEN_HEIGHT;
    float zoom = Math.min(widthZoom, heightZoom);
    return Math.max(1, zoom);
  }
}
