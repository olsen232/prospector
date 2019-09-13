package xor.core;

import static xor.core.PixelConstants.*;
import xor.core.Cells.CellType;

public class LevelEditor {
  private static final int[] VIEWPORT_SIZES = new int[]{8, 16, 32};
  public static final int MS_PER_MOVE = 100;

  public final Maze maze;
  public final Maze paletteMaze;

  public final ControlState controlState;
  public final Viewport viewport;
  public final BaseMazeRenderer mazeRenderer;
  public final PaletteRenderer paletteRenderer;
  public final MapRenderer mapRenderer;

  private int viewportSizeIndex = 1;

  private boolean showPalette;
  private boolean active = false;
  private int paintCell = CellType.WALL.code;
  private int stateIconOffset = 0;

  private boolean ignoreFirstMousePress;

  private int msSinceLastMove;

  public LevelEditor() {
    this(defaultEditorMaze(), new ControlState());
  }

  public LevelEditor(Maze maze) {
    this(maze, new ControlState());
  }

  public LevelEditor(Maze maze, ControlState controlState) {
    this.maze = maze;
    this.paletteMaze = paletteMaze();
    this.controlState = controlState;
    this.viewport = new Viewport(maze, viewportSize());
    this.mazeRenderer = new BaseMazeRenderer(maze);
    this.paletteRenderer = new PaletteRenderer(paletteMaze);
    this.mapRenderer = new MapRenderer(maze);
  }

  public void handleControls() {
    if (controlState.isFresh(Control.OK) || controlState.isFreshStateIconClick()) {
      showPalette = !showPalette;
    }
    if (!viewport.isMoving() && !controlState.isPressed(ExtraControl.SPECIAL)) {
      int deltaX = 0, deltaY = 0;
      for (Control c : Control.ALL_CONTROLS) {
        if (c != Control.OK && controlState.isPressed(c)) {
          deltaX += c.direction.dx;
          deltaY += c.direction.dy;
        }
      }
      viewport.tryMove(deltaX, deltaY);
      if (viewport.isMoving()) {
        msSinceLastMove = 0;
      }
    }

    boolean mousePressed = false;
    if (controlState.isFreshViewportClick()) {
      mousePressed = true;
      ignoreFirstMousePress = false;
    } else if (controlState.isViewportPressed() && !ignoreFirstMousePress) {
      mousePressed = true;
    }

    if (mousePressed) {
      int paletteX = controlState.lastMouseViewportX() * 8 / VIEWPORT_SIZE_PX - 5;
      int paletteY = controlState.lastMouseViewportY() * 8 / VIEWPORT_SIZE_PX;

      if (showPalette && paletteX >= 0) {
        paintCell = paletteMaze.get(paletteX, paletteY);
        stateIconOffset = Sprites.stateIconOffset(Cells.cellType(paintCell));
      } else {
        int mazeX = controlState.lastMouseViewportX() * viewport.size() / VIEWPORT_SIZE_PX + viewport.originX();
        int mazeY = controlState.lastMouseViewportY() * viewport.size() / VIEWPORT_SIZE_PX + viewport.originY();
        CellType paintCellType = Cells.cellType(paintCell);
        if (paintCellType == CellType.EMPTY) {
          maze.set(mazeX, mazeY, paintCell);
        } else {
          maze.updateCellType(mazeX, mazeY, paintCellType);
        }
        maze.updateNeighbouringWalls(mazeX, mazeY);
        mapRenderer.updateMap();
      }
    }

    if (controlState.isFresh(ExtraControl.ZOOM_IN)) {
      adjustViewportSize(-1);
    } else if (controlState.isFresh(ExtraControl.ZOOM_OUT)) {
      adjustViewportSize(1);
    }

    if (controlState.isFresh(Control.LEFT) && controlState.isPressed(ExtraControl.SPECIAL)) {
      adjustTheme(-1);
    } else if (controlState.isFresh(Control.RIGHT) && controlState.isPressed(ExtraControl.SPECIAL)) {
      adjustTheme(+1);
    }

    if (controlState.isFresh(ExtraControl.BACK)) {
      if (showPalette) {
        showPalette = false;
      } else {
        active = false;
      }
    }

    if (controlState.isFreshCycleLeftClick()) {
      adjustTheme(-1);
    } else if (controlState.isFreshCycleRightClick()) {
      adjustTheme(+1);
    }

    if (controlState.isFreshExitClick()) {
      active = false;
    }
  }

  public boolean isActive() {
    return active;
  }

  public void setActive(boolean active) {
    if (active && !this.active) ignoreFirstMousePress = true;
    this.active = active;
  }

  public Maze maze() {
    return maze;
  }

  public Maze customMazeOrNull() {
    return !isDefaultEditorMaze(maze) ? maze : null;
  }

  public void tick(int ms) {
    msSinceLastMove += ms;
    if (viewport.isMoving() && msSinceLastMove >= MS_PER_MOVE) {
      viewport.completeMove();
    }
    handleControls();
  }

  public void render(Surface surface) {
    int percent = viewport.isMoving()
        ? Ints.clamp(100 * msSinceLastMove / MS_PER_MOVE, 0, 99)
        : 0;
    
    mazeRenderer.render(viewport, percent, surface, /*gridlines=*/ true);
    if (showPalette) {
      surface.translate(5 * TILE_SIZE, 0);
      surface.fillRect(0, 0, 3 * TILE_SIZE, 8 * TILE_SIZE, 0xff000000);
      paletteRenderer.renderAll(0, surface);
      surface.translate(-5 * TILE_SIZE, 0);
    }
  }

  public Image stateIcon() {
    CellType paintCellType = Cells.cellType(paintCell);
    if (paintCellType == CellType.EMPTY) {
      return getFloorTile(paintCell);
    } else if (paintCellType == CellType.WALL) {
      return getWallTile(paintCell);
    } else {
      return getSpriteTile(paintCell);
    }
  }

  public int stateIconOffset() {
    return stateIconOffset;
  }

  public Image renderMap() {
    return mapRenderer.map();
  }

  public void adjustTheme(int delta) {
    if (controlState.isPressed(ExtraControl.FAST_FORWARD)) {
      paintCell = CellType.EMPTY.code;
      maze.floorTheme = Ints.modulo(maze.floorTheme + delta, Tiles.NUM_THEMES);
    } else {
      paintCell = CellType.WALL.code;
      maze.floorTheme = maze.wallTheme = Ints.modulo(maze.wallTheme + delta, Tiles.NUM_THEMES);
    }
    stateIconOffset = Sprites.stateIconOffset(Cells.cellType(paintCell));
  }

  public void resetViewportSize() {
    viewportSizeIndex = 1;
    viewport.resize(VIEWPORT_SIZES[viewportSizeIndex]);
  }

  public void adjustViewportSize(int delta) {
    viewportSizeIndex = Ints.clamp(viewportSizeIndex + delta, 0, VIEWPORT_SIZES.length - 1);
    viewport.resize(VIEWPORT_SIZES[viewportSizeIndex]);
  }

  private int viewportSize() {
    return VIEWPORT_SIZES[viewportSizeIndex];
  }

  private Image getFloorTile(int cell) {
    return Tiles.FLOOR_TILES[maze.floorTheme][Cells.floorType(cell)];
  }

  private Image getWallTile(int cell) {
    return Tiles.WALL_TILES[maze.wallTheme][Cells.wallType(cell)];
  }

  private Image getSpriteTile(int cell) {
    CellType cellType = Cells.cellType(cell);
    if (cellType == CellType.EMPTY || cellType == CellType.UNKNOWN) {
      return null;
    } else {
      return Sprites.CELLS[cellType.code];
    }
  }

  private static final String DEFAULT_MAZE_ASCII =
          Maze.STANDARD_GRID_SIZE + "\n" +
          "[][][][][][][][]" + "\n" +
          "[]              " + "\n" +
          "[]    P2        " + "\n" +
          "[]  P1          " + "\n" +
          "[]      Ex      " + "\n" +
          "[]              " + "\n" +
          "[]              " + "\n" +
          "[]              " + "\n";

  private static final String PALETTE_ASCII =
          "3, 8" + "\n" +
          "[]  .." + "\n" +
          "  :  :" + "\n" +
          "  P1P2" + "\n" +
          "RoBaDe" + "\n" +
          "HfNwNe" + "\n" +
          "DySwSe" + "\n" +
          "TbVfZe" + "\n" +
          "SpTeEx" + "\n";

  private static Maze DEFAULT_EDITOR_MAZE = createDefaultEditorMaze();

  private static Maze createDefaultEditorMaze() {
    Maze maze = AsciiMazeLoader.loadMaze(DEFAULT_MAZE_ASCII);
    maze.setTitle("Untitled maze");
    for (int x = 0; x < maze.width; x++) {
      maze.set(x, 0, CellType.WALL.code);
      maze.set(x, maze.height - 1, CellType.WALL.code);
    }
    for (int y = 0; y < maze.height; y++) {
      maze.set(0, y, CellType.WALL.code);
      maze.set(maze.width - 1, y, CellType.WALL.code);
    }
    maze.updateAllWalls();
    return maze;
  }

  public static Maze defaultEditorMaze() {
    Maze maze = DEFAULT_EDITOR_MAZE.clone();
    maze.floorTheme = maze.wallTheme = (int) (Tiles.NUM_THEMES * Math.random());
    return maze;
  }

  public static boolean isDefaultEditorMaze(Maze maze) {
    return DEFAULT_EDITOR_MAZE.isSameByteGrid(maze);
  }

  public static Maze paletteMaze() {
    return AsciiMazeLoader.loadMaze(PALETTE_ASCII);
  }

  private class PaletteRenderer extends BaseMazeRenderer {
    PaletteRenderer(Maze maze) {
      super(maze);
    }
    
    @Override
    protected boolean drawFloor(int x, int y) {
      return x > 0 && y < 2;
    }

    @Override
    protected Image[] getThemedFloorTiles() {
      return mazeRenderer.getThemedFloorTiles();
    }

    @Override
    protected Image[] getThemedWallTiles() {
      return mazeRenderer.getThemedWallTiles();
    }
  }
}

