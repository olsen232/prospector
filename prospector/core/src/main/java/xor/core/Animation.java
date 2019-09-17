package xor.core;

public class Animation {
  public final Image[] frames;
  public final int repeats;
  
  public Animation(Image[] frames, int repeats) {
    this.frames = frames;
    this.repeats = repeats;
  }
  
  public Image frame(int percent) {
    int frame = (frames.length * repeats * percent / 100) % frames.length;
    return frames[frame];
  }
}
    