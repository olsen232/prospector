package xor.core;

public class AnimatedImage extends Image {
  private static final int NUM_STEPS = 16;

  public final Animator animator;
  public final Image[] frames;
  
  public AnimatedImage(Animator animator, Image[] frames) {
    super(frames[0].raw);
    this.animator = animator;
    this.frames = frames;
  }  
  
  public playn.core.Image raw() {
    return frames[animator.signal % frames.length].raw;
  }
  
  public Image flipLTR() {
    Image[] flipFrames = new Image[frames.length];
    for (int i = 0; i < frames.length; i++) {
      flipFrames[i] = this.frames[i].flipLTR();
    }
    return new AnimatedImage(animator, flipFrames);
  }
  
  public Image subImage(int x, int y, int width, int height) {
    Image[] subFrames = new Image[frames.length];
    for (int i = 0; i < frames.length; i++) {
      subFrames[i] = this.frames[i].subImage(x, y, width, height);
    }
    return new AnimatedImage(animator, subFrames);
  }
  
  public Image recolor(int recolor) {
    throw new UnsupportedOperationException();
  }
  
  public static Image createCycle(Image in, Animator animator) {
    int w = (int) in.width();
    int h = (int) in.height();

    int[] cyclers = new int[NUM_STEPS];
    int len = 1;
    int stepSize = (int) in.width() / NUM_STEPS;
    int y = h - 1;
    int prevRgb = 0;
    int cycleLen = 0, maxCycleLen = 0;

    int[] bottomRow = new int[w];
    in.raw.getRgb(0, y, w, 1, bottomRow, 0, w);

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
      return in;
    }

    Image[] frames = new Image[maxCycleLen];
    for (int i = 0; i < frames.length; i++) {
      frames[i] = cycleColors(in, cyclers, len, i);
    }
    return new AnimatedImage(animator, frames);
  }
  
  public static Image cycleColors(Image in, int[] cyclers, int len, int cycle) {
    if (cycle == 0 || len == 0) {
      return in;
    }
    int w = (int) in.width();
    int h = (int) in.height();
    int[] pixels = in.getPixels();
    for (int i = 0; i < pixels.length; i++) {
      pixels[i] = cycleColors(pixels[i], cyclers, len, cycle);
    }
    Canvas canvas = Platform.INSTANCE.createCanvas(w, h);
    canvas.image.setPixels(pixels);
    return canvas.image;
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
}