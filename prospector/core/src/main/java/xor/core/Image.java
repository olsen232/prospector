package xor.core;

public class Image implements LoadTracker.Loadable {
  public static final LoadTracker LOAD_TRACKER = new LoadTracker();

  public final playn.core.Image raw;

  public Image(playn.core.Image raw) {
    this.raw = raw;
  }
  
  public static Image load(String name) {
    Image result = new Image(Platform.INSTANCE.raw.assets().getImage(name));
    LOAD_TRACKER.add(result);
    return result;
  }

  public playn.core.Image raw() {
    return raw;
  }
  
  public boolean isLoaded() {
    return raw.isLoaded();
  }

  public int width() {
    return raw.pixelWidth();
  }

  public int height() {
    return raw.pixelHeight();
  }
  
  public Image flipLTR() {
    Canvas canvas = Platform.INSTANCE.createCanvas(width(), height());
    canvas.scale(-1, 1);
    canvas.draw(this, -width(), 0);
    return canvas.image;
  }
  
  public Image[] tile(int size) {
    return tile(size, size);
  }
  
  public Image[] tile(int xSize, int ySize) {
    int w = width() / xSize;
    int h = height() / ySize;
    int i = 0;
    Image result[] = new Image[w * h];
    for (int y = 0; y < h; y++) {
      for (int x = 0; x < w; x++) {
        result[i++] = subImage(x * xSize, y * ySize, xSize, ySize);
      }
    }
    return result;
  }
  
  public Image subImage(int x, int y, int width, int height) {
    playn.core.Canvas canvas = Platform.INSTANCE.createRawCanvas(width, height);
    canvas.draw(raw.region(x, y, width, height), 0, 0);
    return new Image(canvas.image);
  }
  
  public Image recolor(int recolor) {
    int w = width();
    int h = height();
    int[] pixels = getPixels();
    for (int i = 0; i < pixels.length; i++) {
      pixels[i] &= recolor;
    }
    playn.core.Canvas c = Platform.INSTANCE.createRawCanvas(w, h);
    c.image.setRgb(0, 0, w, h, pixels, 0, w);
    return new Image(c.image);
  }
  
  public int[] getPixels() {
    int w = width();
    int h = height();
    int[] pixels = new int[w * h];
    raw.getRgb(0, 0, w, h, pixels, 0, w);
    return pixels;
  }
  
  public void setPixels(int[] pixels) {
    int w = width();
    int h = height();
    raw.setRgb(0, 0, w, h, pixels, 0, w);
  }
  
  public Image cycle(Animator animator) {
    return AnimatedImage.createCycle(this, animator);
  }
  
  public void updateTexture() {
    raw.updateTexture();
  }
}
