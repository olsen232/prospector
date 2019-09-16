package xor.core;

public enum Animator {
  SPRITE(100),
  MAP(200),
  MAP_SLOW(600);
  
  private final int msPerSignal;
  public int signal;
  
  Animator(int msPerSignal) {
    this.msPerSignal = msPerSignal;
  }
  
  public static final Animator[] ALL_ANIMATORS = Animator.values();
  public static int ticks;  
  
  public static void tick(int msPerTick) {
    ticks++;
    for (Animator animator : ALL_ANIMATORS) {
      animator.signal = ticks / Math.max(1, animator.msPerSignal / msPerTick);
    }
  }
}