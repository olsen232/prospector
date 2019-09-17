package xor.core;

import static xor.core.PixelConstants.*;

import xor.core.Cells.CellType;
import xor.core.MazeState.AdditionalEvent;
import xor.core.MazeState.MazeStateListener;
import xor.core.MazeState.State;

public class MapRenderer implements MazeStateListener {

  public static final int WALL_COLOR = 0xffeecc66;  // Was 0xffffdd77, added extra contrast.
  public static final int BALLOON_COLOR = 0xffffffff;

  public final MazeState mazeState;
  public final Maze maze;
  private int size;
  private int zoom;
  private int originX;
  private int originY;

  private Image map = null;

  public MapRenderer(Maze maze) {
    this.maze = maze;
    this.mazeState = null;

    size = findSize(maze);
    zoom = MAP_SIZE / size;
    originX = (size - maze.width) / 2;
    originY = (size - maze.height) / 2;

    updateMap();
  }

  public MapRenderer(MazeState mazeState) {
    this.maze = null;
    this.mazeState = mazeState;
    size = 1;

    size = findSize(mazeState.maze());
    zoom = MAP_SIZE / size;
    originX = (size - mazeState.maze().width) / 2;
    originY = (size - mazeState.maze().height) / 2;

    updateMap();

    mazeState.mazeStateListeners.add(this);
  }

  public Maze maze() {
    return (mazeState != null) ? mazeState.maze() : maze;
  }

  public int size() {
    return size;
  }

  public Image map() {
    return map;
  }

  public void onStateTransition(State oldState, State newState, AdditionalEvent event) {
    if (oldState == State.EXPLOSION
        || event == AdditionalEvent.BALLOON_COLLECTED
        || event == AdditionalEvent.MAP_COLLECTED) {
      updateMap();
    }
  }

  public void reset() {
    updateMap();
  }

  public void updateMap() {
    Canvas canvas = Platform.INSTANCE.createCanvas(MAP_SIZE, MAP_SIZE);
    canvas.fillRect(0, 0, MAP_SIZE, MAP_SIZE, 0xff000000);

    int width = maze().width;
    int height = maze().height;
    int halfWidth = (width + 1) / 2;
    int halfHeight = (height + 1) / 2;

    if (isCollected(CellType.MAP_NW)) {
      render(0, 0, halfWidth, halfHeight, canvas);
    }
    if (isCollected(CellType.MAP_NE)) {
      render(halfWidth, 0, width, halfHeight, canvas);
    }
    if (isCollected(CellType.MAP_SW)) {
      render(0, halfHeight, halfWidth, height, canvas);
    }
    if (isCollected(CellType.MAP_SE)) {
      render(halfWidth, halfHeight, width, height, canvas);
    }
    map = canvas.snapshot();
  }

  private void render(int x1, int y1, int x2, int y2, Canvas canvas) {
    for (int y = y1; y < y2; y++) {
      for (int x = x1; x < x2; x++) {

        CellType cellType = maze().getCellType(x, y);
        int color = 0xff000000;
        if (cellType == CellType.WALL) {
          color = WALL_COLOR;
        } else if (cellType == CellType.BALLOON) {
          color = BALLOON_COLOR;
        }
        canvas.fillRect((x + originX) * zoom, (y + originY) * zoom, zoom, zoom, color);
      }
    }
  }

  private boolean isCollected(CellType map) {
    return mazeState == null || mazeState.collectedMaps.contains(map);
  }

  private static int findSize(Maze maze) {
    int size = 1;
    while (maze.width > size || maze.height > size) {
      size *= 2;
    }
    return size;
  }
}
