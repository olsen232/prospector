package xor.core;


public final class Toolkit {
  private Toolkit() {}

  private static int NUM_STEPS = 16;

  /*public static XorImage xorImage(Image in) {
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
  }*/

  /*public static Image cycleColors(Image in, int[] cyclers, int len, int cycle) {
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
  }*/

  /*public static XorImage[] tile(XorImage in, int xSize, int ySize) {
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
  }*/
}
