package xor.core;

import static xor.core.PixelConstants.ZOOM;

import playn.core.Image;
import playn.core.Platform;
import java.util.HashMap;
import java.util.Map;

public final class Toolkit {
  private Toolkit() {}

  private static final Map<String, Image> map = new HashMap<String, Image>();

  public static boolean isImagesLoaded() {
    if (map.size() == 0) {
      return false;
    }
    for (playn.core.Image image : map.values()) {
      if (!image.isLoaded()) {
        return false;
      }
    }
    return true;
  }

  public static String imagesLoadedDesc() {
    int loaded = 0, total = 0;
    for (playn.core.Image image : map.values()) {
      loaded += image.isLoaded() ? 1 : 0;
      total += 1;
    }
    return "Images: " + loaded + " of " + total;
  }

  public static Platform platform = null;

  private static int NUM_STEPS = 16;

  public static XorImage xorImage(Image in) {
    int w = (int) in.width();
    int h = (int) in.height();

    int[] cyclers = new int[16];
    int len = 1;
    int stepSize = (int) in.width() / NUM_STEPS;
    int y = h - 1;
    int prevRgb = 0;
    int cycleLen = 0, maxCycleLen = 0;

    int[] bottomRow = new int[w];
    in.getRgb(0, y, w, 1, bottomRow, 0, w);

    for (int i = 0; i < NUM_STEPS; i++) {
      int rgb = bottomRow[i * stepSize];
      if ((rgb & 0xff000000) == 0) rgb = 0;
      if (rgb != prevRgb) {
        prevRgb = rgb;
        cyclers[len++] = rgb;
        if (rgb != 0) {
          cycleLen++;
          maxCycleLen = Math.max(maxCycleLen, cycleLen);
          cyclers[len - cycleLen - 1] = cycleLen;
        } else {
          cycleLen = 0;
        }
      }
    }

    if (maxCycleLen <= 1) {
      return new XorImage(new Image[] {in} );
    }

    Image[] variants = new Image[maxCycleLen];
    for (int i = 0; i < variants.length; i++) {
      variants[i] = cycleColors(in, cyclers, len, i);
    }
    return new XorImage(variants);
  }

  public static Image cycleColors(Image in, int[] cyclers, int len, int cycle) {
    if (cycle == 0 || len == 0) {
      return in;
    }
    int w = (int) in.width();
    int h = (int) in.height();
    int[] pixels = new int[w * h];
    in.getRgb(0, 0, w, h, pixels, 0, w);
    for (int i = 0; i < pixels.length; i++) {
      pixels[i] = cycleColors(pixels[i], cyclers, len, cycle);
    }
    playn.core.Canvas c = createCanvas(w, h);
    c.image.setRgb(0, 0, w, h, pixels, 0, w);
    return c.image;
  }

  public static int cycleColors(int in, int[] cyclers, int len, int cycle) {
    int cycleStart = 0;
    int cycleLen = 0;
    for (int i = 0; i < len; i++) {
      if (i == cycleStart + cycleLen) {
        cycleStart = i + 1;
        cycleLen = cyclers[i];
      } else if (in == cyclers[i]) {
        return cyclers[((i + cycle - cycleStart) % cycleLen) + cycleStart];
      }
    }
    return in;
  }

  public static XorImage recolor(XorImage in, int recolor) {
    return new XorImage(new Image[] {recolor(in.variant(0), recolor)});
  }

  public static Image recolor(Image in, int recolor) {
    int w = (int) in.width();
    int h = (int) in.height();
    int[] pixels = new int[w * h];
    in.getRgb(0, 0, w, h, pixels, 0, w);
    for (int i = 0; i < pixels.length; i++) {
      pixels[i] =  recolor(pixels[i], recolor);
    }
    playn.core.Canvas c = createCanvas(w, h);
    c.image.setRgb(0, 0, w, h, pixels, 0, w);
    return c.image;
  }

  public static int recolor(int in, int recolor) {
    return in & recolor;
  }

  public static XorImage flipLTR(XorImage in) {
    if (in == null) return null;
    Image[] flipped = new Image[in.variants.length];
    for (int i = 0; i < in.variants.length; i++) {
      flipped[i] = flipLTR(in.variants[i]);
    }
    return new XorImage(flipped);
  }

  public static Image flipLTR(Image in) {
    int w = (int) in.width();
    int h = (int) in.height();
    playn.core.Canvas c = createCanvas(w, h);
    c.scale(-1, 1);
    c.draw(in, -w, 0);
    return c.image;
  }

  public static XorImage[] tile(XorImage in, int size) {
    return tile(in, size, size);
  }

  public static Image[] tile(Image in, int size) {
    return tile(in, size, size);
  }

  public static XorImage[] tile(XorImage in, int xSize, int ySize) {
    int w = in.width() / xSize;
    int h = in.height() / ySize;

    XorImage[] result = new XorImage[w * h];
    for (int j = 0; j < result.length; j++) {
      result[j] = new XorImage(in.variants.length);
    }

    for (int i = 0; i < in.variants.length; i++) {
      Image[] tiles = tile(in.variants[i], xSize, ySize);
      for (int j = 0; j < tiles.length; j++) {
        result[j].variants[i] = tiles[j];
      }
    }
    return result;
  }

  public static Image[] tile(Image in, int xSize, int ySize) {
    int w = (int) in.width() / xSize;
    int h = (int) in.height() / ySize;
    int i = 0;
    Image result[] = new Image[w * h];
    for (int y = 0; y < h; y++) {
      for (int x = 0; x < w; x++) {
        result[i++] = subImage(in, x * xSize, y * ySize, xSize, ySize);
      }
    }
    return result;
  }

  public static Image subImage(Image in, int x, int y, int width, int height) {
    playn.core.Canvas c = createCanvas(width, height);
    c.draw(in.region(x, y, width, height), 0, 0);
    return c.image;
  }

  public static XorImage slow(XorImage in, int factor) {
    Image[] result = new Image[in.variants.length * factor];
    for (int i = 0; i < result.length; i++) {
      result[i] = in.variant(i / factor);
    }
    return new XorImage(result);
  }

  public static Image get(String s) {
    if (!map.containsKey(s)) {
      throw new IllegalStateException(s);
    }
    return map.get(s);
  }

  public static Image zoom(Image in) {
    return zoom(in, ZOOM);
  }

  public static Image zoom(Image in, int zoom) {
    int w = (int) in.width();
    int h = (int) in.height();
    int[] pixels = new int[w * h];
    in.getRgb(0, 0, w, h, pixels, 0, w);
    int w2 = zoom * w;
    int h2 = zoom * h;
    int[] pixels2 = new int[w2 * h2];
    for (int x = 0; x < w2; x++) {
      for (int y = 0; y < h2; y++) {
        pixels2[y * w2 + x] = pixels[(y / zoom) * w + (x / zoom)];
      }
    }
    playn.core.Canvas c = createCanvas(w2, h2);
    c.image.setRgb(0, 0, w2, h2, pixels2, 0, w2);
    return c.image;
  }

  public static void start(String s) {
    if (!map.containsKey(s)) {
      map.put(s, platform.assets().getImage(s));
    }
  }

  public static XorImage getAsXor(String s) {
    return new XorImage(new Image[]{ get(s) });
  }

  public interface CanvasCreator {
    playn.core.Canvas createCanvas(int pixelWidth, int pixelHeight);
  }

  public static CanvasCreator canvasCreator;

  public static playn.core.Canvas createCanvas(int pixelWidth, int pixelHeight) {
    if (canvasCreator != null) return canvasCreator.createCanvas(pixelWidth, pixelHeight);
    return platform.graphics().createCanvas(pixelWidth, pixelHeight);
  }
}
