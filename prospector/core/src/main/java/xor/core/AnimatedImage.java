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
  
  @Override
  public Image flipLTR() {
    Image[] flipFrames = new Image[frames.length];
    for (int i = 0; i < frames.length; i++) {
      flipFrames[i] = this.frames[i].flipLTR();
    }
    return new AnimatedImage(animator, flipFrames);
  }
  
  @Override
  public Image subImage(int x, int y, int width, int height) {
    Image[] subFrames = new Image[frames.length];
    for (int i = 0; i < frames.length; i++) {
      subFrames[i] = this.frames[i].subImage(x, y, width, height);
    }
    return new AnimatedImage(animator, subFrames);
  }
  
  @Override
  public Image recolor(int recolor) {
    throw new UnsupportedOperationException();
  }
  
  @Override
  public Image cycle(Animator animator) {
    throw new UnsupportedOperationException();
  }
}