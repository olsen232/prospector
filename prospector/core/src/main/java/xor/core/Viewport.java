package xor.core;

import static xor.core.PixelConstants.TILE_SIZE;

public class Viewport {

  enum Axis {
    HORIZONTAL {
      int delta(Direction d) { return d.dx; }
      int size(Maze m) { return m.width; }
      int position(Player p) { return p.x(); }
      int origin(Viewport v) { return v.originX; }
    },
    VERTICAL {
      int delta(Direction d) { return d.dy; }
      int size(Maze m) { return m.height; }
      int position(Player p) { return p.y(); }
      int origin(Viewport v) { return v.originY; }
    };

    abstract int delta(Direction d);
    abstract int size(Maze m);
    abstract int position(Player p);
    abstract int origin(Viewport v);
  }

  //private final Player player;
  private final Maze maze;
  private int originX;
  private int originY;
  private int size;
  private int lookAheadBorder;
  private int deltaX;
  private int deltaY;

  public Viewport(Maze maze, int size) {
    this.maze = maze;
    this.size = size;
    this.lookAheadBorder = chooseLookAheadBorder(size);
  }

  public Viewport(Maze maze, int size, Player player) {
    this(maze, size);

    centerOnPlayer(player);
  }

  public boolean isMoving() {
    return deltaX != 0 || deltaY != 0;
  }

  public void completeMove() {
    originX += deltaX;
    originY += deltaY;
    deltaX = deltaY = 0;
  }

  public int deltaX() {
    return deltaX;
  }

  public int deltaY() {
    return deltaY;
  }

  public int originX() {
    return originX;
  }

  public int originY() {
    return originY;
  }

  public int originXInPx() {
    return originX * TILE_SIZE;
  }

  public int originYInPX() {
    return originY * TILE_SIZE;
  }

  public int movingOriginXInPx(int percent) {
    return (originX * TILE_SIZE) + (deltaX * TILE_SIZE * percent / 100);
  }

  public int movingOriginYInPx(int percent) {
    return (originY * TILE_SIZE) + (deltaY * TILE_SIZE * percent / 100);
  }

  public int maxX() {
    return originX + size;
  }

  public int maxY() {
    return originY + size;
  }

  public int size() { return size; }

  public int sizeInPx() {
    return size * TILE_SIZE;
  }

  public int minXIncDelta() {
    return Math.min(originX, originX + deltaX);
  }

  public int minYIncDelta() {
    return Math.min(originY, originY + deltaY);
  }

  public int maxXIncDelta() {
    return Math.max(originX + size, originX + size + deltaX);
  }

  public int maxYIncDelta() {
    return Math.max(originY + size, originY + size + deltaY);
  }

  public int mazeX(int viewX) {
    return viewX + originX;
  }

  public int mazeY(int viewY) {
    return viewY + originY;
  }

  public int viewportX(int mazeX) {
    return mazeX - originX;
  }

  public int viewportY(int mazeY) {
    return mazeY - originY;
  }

  public boolean isInsideMaze(int viewX, int viewY) {
    return maze.isValidXY(mazeX(viewX), mazeY(viewY));
  }

  public boolean isInsideMazeX(int viewX) {
    return maze.isValidX(mazeX(viewX));
  }

  public boolean isInsideMazeY(int viewY) {
    return maze.isValidY(mazeY(viewY));
  }

  public boolean contains(int mazeX, int mazeY) {
    return containsX(mazeX) && containsY(mazeY);
  }

  public boolean containsX(int mazeX) {
    return mazeX >= originX && mazeX < maxX();
  }

  public boolean containsY(int mazeY) {
    return mazeY >= originY && mazeY < maxY();
  }

  public boolean containsIncDelta(int mazeX, int mazeY) {
    return containsXIncDelta(mazeX) && containsYIncDelta(mazeY);
  }

  public boolean containsXIncDelta(int mazeX) {
    return mazeX >= minXIncDelta() && mazeX < maxXIncDelta();
  }

  public boolean containsYIncDelta(int mazeY) {
    return mazeY >= minYIncDelta() && mazeY < maxYIncDelta();
  }

  public void centerOnPlayer(Player player) {
    originX = originToCenterOnPlayer(player, Axis.HORIZONTAL);
    originY = originToCenterOnPlayer(player, Axis.VERTICAL);
  }

  private int originToCenterOnPlayer(Player player, Axis axis) {
    int origin = axis.position(player) - (size + 1) / 2;
    return constrainOriginToMaze(origin, axis);
  }

  public void tryMove(int dx, int dy) {
    deltaX = constrainDeltaToMaze(dx, Axis.HORIZONTAL);
    deltaY = constrainDeltaToMaze(dy, Axis.VERTICAL);
  }

  public void followPlayer(Player player) {
    int dx = deltaToFollowPlayer(player, Axis.HORIZONTAL);
    int dy = deltaToFollowPlayer(player, Axis.VERTICAL);
    if (Math.abs(dx) + Math.abs(dy) > 1) {
      centerOnPlayer(player);  // Player seems to have teleported.
    } else {
      originX += dx;
      originY += dy;
    }

    followMovingPlayer(player);
  }

  public void resize(int newSize) {
    if (newSize == size) return;
    int delta = newSize - size;
    this.size = newSize;
    this.lookAheadBorder = chooseLookAheadBorder(size);

    originX = constrainOriginToMaze(originX - delta / 2, Axis.HORIZONTAL);
    originY = constrainOriginToMaze(originY - delta / 2, Axis.VERTICAL);
  }

  public void resize(int newSize, Player player) {
    if (newSize == size) return;
    this.size = newSize;
    this.lookAheadBorder = chooseLookAheadBorder(size);

    centerOnPlayer(player);
    followMovingPlayer(player);
  }

  private int deltaToFollowPlayer(Player player, Axis axis) {
    return deltaToFollowTarget(axis.position(player), axis);
  }

  private int deltaToFollowTarget(int target, Axis axis) {
    return originToFollowTarget(target, axis) - axis.origin(this);
  }

  private int originToFollowPlayer(Player player, Axis axis) {
    return originToFollowTarget(axis.position(player), axis);
  }

  private int originToFollowTarget(int target, Axis axis) {
    int origin = axis.origin(this);
    int targetFromOrigin = target - origin;
    if (targetFromOrigin < lookAheadBorder) {
      origin += targetFromOrigin - lookAheadBorder;
    } else if (targetFromOrigin >= size - lookAheadBorder) {
      origin += targetFromOrigin + lookAheadBorder + 1 - size;
    }
    return constrainOriginToMaze(origin, axis);
  }

  private void followMovingPlayer(Player player) {
    Direction pm = player.movement();
    if (pm != null) {
      deltaX = deltaToFollowTarget(pm.dx(player.x()), Axis.HORIZONTAL);
      deltaY = deltaToFollowTarget(pm.dy(player.y()), Axis.VERTICAL);
    } else {
      deltaX = 0;
      deltaY = 0;
    }
  }

  private int constrainDeltaToMaze(int delta, Axis axis) {
    int origin = axis.origin(this);
    return constrainOriginToMaze(origin + delta, axis) - origin;
  }

  private int constrainOriginToMaze(int origin, Axis axis) {
    return constrainOriginToMaze(origin, size, axis.size(maze));
  }

  public static int constrainOriginToMaze(int origin, int viewportSize, int mazeSize) {
    if (viewportSize >= mazeSize) {
      return ((mazeSize + 1) / 2) - ((viewportSize + 1) / 2);
    } else if (origin <= 0) {
      return 0;
    } else if (origin + viewportSize >= mazeSize) {
      return mazeSize - viewportSize;
    }
    return origin;
  }

  private static int chooseLookAheadBorder(int size) {
    if (size <= 2) return 0;
    else if (size <= 8) return 1;
    else if (size <= 10) return 2;
    else if (size <= 12) return 3;
    return 4;
  }
}

