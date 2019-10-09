package xor.core;

import static xor.core.PixelConstants.*;

import xor.core.Cells.CellType;

public class BaseMazeRenderer {
  public static final boolean CACHE_ENABLED = Boolean.FALSE;

  public final Maze maze;
  public final RenderCache cache;
  
  public BaseMazeRenderer(Maze maze) {
    this(maze, new RenderCache());
  }
  
  public BaseMazeRenderer(Maze maze, RenderCache cache) {
    this.maze = maze;
    this.cache = cache;
    this.cache.setSize(maze);
  }

  // Render the whole maze including animations
  public void renderAll(int percent, Surface surface) {
    renderAllStatic(surface);
    renderAnimations(percent, surface);
  }

  // Render some part of the maze, including animations
  public void renderRect(Viewport viewport, int percent, Surface surface) {
    surface.saveTx();
    float scale = 1f * VIEWPORT_SIZE_TILES / viewport.size();
    surface.scale(scale, scale);

    int offsetX = -viewport.movingOriginXInPx(percent);
    int offsetY = -viewport.movingOriginYInPx(percent);
    surface.translate(offsetX, offsetY);

    renderRectStatic(viewport.minXIncDelta(), viewport.minYIncDelta(), viewport.maxXIncDelta(), viewport.maxYIncDelta(), surface);
    renderAnimations(percent, surface);
    surface.restoreTx();
  }
  
  // Render the whole maze without animations
  public void renderAllStatic(DrawImage target) {
    if (CACHE_ENABLED) {
      target.draw(cache.renderAllStatic(this), 0, 0);
    } else {
      renderAllStaticNoCache(target);
    }
  }

  // Render some part of the maze without animations
  public void renderRectStatic(int startX, int startY, int stopX, int stopY, DrawImage target) {
    if (CACHE_ENABLED) {
      target.draw(cache.renderAllStatic(this), 0, 0);
    } else {
      renderRectStaticNoCache(startX, startY, stopX, stopY, target);
    }
  }

  // Render the whole maze without animations and without using the cache
  public void renderAllStaticNoCache(DrawImage target) {
    renderRectStaticNoCache(0, 0, maze.width, maze.height, target);
  }
  
  // Render some part of the maze without animations and without using the cache
  public void renderRectStaticNoCache(int startX, int startY, int stopX, int stopY, DrawImage target) {
    for (int x = startX; x < stopX; x++) {
      for (int y = startY; y < stopY; y++) {
        if (!maze().isValidXY(x, y)) {
          continue;
        }

        int cell = maze().get(x, y);
        if (drawFloor(x, y)) {
          target.drawTile(getFloorTile(cell), x, y);
        }
        
        if (Cells.isWall(cell)) {
          if (drawWall(x, y)) {
            target.drawTile(getWallTile(cell), x, y);
          }
        } else {
          if (drawSprite(x, y)) {
            target.drawTile(getSpriteTile(cell), x, y);
          }
        }
      }
    }
  }

  protected Maze maze() {
    return maze;
  }

  protected boolean drawFloor(int x, int y) {
    return true;
  }

  protected boolean drawWall(int x, int y) {
    return true;
  }

  protected boolean drawSprite(int x, int y) {
    return true;
  }
  
  public void renderDecorations(Surface surface) {
    // Nothing required.
  }

  public void renderAnimations(int percent, Surface surface) {
    // Nothing required.
  }

  public Image[] getThemedFloorTiles() {
    return Tiles.FLOOR_TILES[maze().floorTheme];
  }

  protected Image getFloorTile(int cell) {
    return getThemedFloorTiles()[Cells.floorType(cell)];
  }

  public Image[] getThemedWallTiles() {
    return Tiles.WALL_TILES[maze().wallTheme];
  }

  protected Image getWallTile(int cell) {
    return getThemedWallTiles()[Cells.wallType(cell)];
  }

  protected Image getSpriteTile(int cell) {
    CellType cellType = Cells.cellType(cell);
    if (cellType == CellType.EMPTY || cellType == CellType.UNKNOWN) {
      return null;
    } else {
      return Sprites.CELLS[cellType.code];
    }
  }
}
    
