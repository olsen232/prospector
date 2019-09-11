package xor.core;

import playn.core.GL20;

public class Platform {
  public static Platform INSTANCE;

  public final playn.core.Platform raw;
  
  public Platform(playn.core.Platform raw) {
    this.raw = raw;
    INSTANCE = this;
  }
  
  public void pixelate() {
    GL20 gl20 = raw.graphics().gl;
    gl20.glTexParameteri(GL20.GL_TEXTURE_2D, GL20.GL_TEXTURE_MIN_FILTER, GL20.GL_NEAREST);
    gl20.glTexParameteri(GL20.GL_TEXTURE_2D, GL20.GL_TEXTURE_MAG_FILTER, GL20.GL_NEAREST);
  }

  public static interface CanvasCreator {
    public playn.core.Canvas create(int pixelWidth, int pixelHeight);
  }

  public CanvasCreator canvasCreator = new CanvasCreator() {
    public playn.core.Canvas create(int pixelWidth, int pixelHeight) {
      return raw.graphics().createCanvas(pixelWidth, pixelHeight);
    }
  };
    
  public playn.core.Canvas createRawCanvas(int pixelWidth, int pixelHeight) {
    return canvasCreator.create(pixelWidth, pixelHeight);
  }
  
  //public Canvas createCanvas(int pixelWidth, int pixelHeight) {
    //return new Canvas(canvasCreator.create(pixelWidth, pixelHeight));
  //}
}