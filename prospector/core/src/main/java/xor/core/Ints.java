package xor.core;

public final class Ints {
  private Ints() {}

  public static int clamp(int x, int lower, int upper) {
    return Math.max(lower, Math.min(upper, x));
  }

  public static int modulo(int x, int y) {
    return ((x % y) + y) % y;
  }
}


