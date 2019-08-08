package xor.core;

public enum Direction {
  UP    ( 0, -1),
  DOWN  ( 0,  1),
  LEFT  (-1,  0),
  RIGHT ( 1,  0);

  public static final Direction[] ALL_DIRECTIONS = Direction.values();
  public static final int NUM_DIRECTIONS = ALL_DIRECTIONS.length;

  public static final Direction[] VERTICAL_DIRECTIONS = new Direction[] { UP, DOWN };
  public static final Direction[] HORIZONTAL_DIRECTIONS = new Direction[] { LEFT, RIGHT };

  private Direction opposite;
  static {
    addOpposite(UP, DOWN);
    addOpposite(LEFT, RIGHT);
  }

  public final int code = this.ordinal();
  public final int bitCode = 1 << this.ordinal();
  public final int dx;
  public final int dy;

  Direction(int dx, int dy) {
    this.dx = dx;
    this.dy = dy;
  }

  public int dx(int x) {
    return x + dx;
  }

  public int dy(int y) {
    return y + dy;
  }

  public int tweenX(int start, int percent, int distance) {
    return start + dx * distance * percent / 100;
  }

  public int tweenY(int start, int percent, int distance) {
    return start + dy * distance * percent / 100;
  }

  public Direction opposite() {
    return opposite;
  }

  public boolean isVertical() {
    return this == UP || this == DOWN;
  }

  public boolean isHorizontal() {
    return this == LEFT || this == RIGHT;
  }

  private static void addOpposite(Direction a, Direction b) {
    if (a.opposite != null || b.opposite != null) throw new IllegalStateException();
    a.opposite = b;
    b.opposite = a;
  }
}
