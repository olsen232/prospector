package xor.core;

import static xor.core.PixelConstants.*;

import xor.core.Cells.CellType;

public class BaseMazeRenderer {
  public static final boolean CACHE_ENABLED = Boolean.TRUE;

  public final Maze maze;
  public final RenderCache cache;

  public BaseMazeRenderer(Maze maze) {
    this.maze = maze;
    this.cache = new RenderCache(maze);
  }

  public void renderAll(int percent, Surface surface) {
    renderRect(0, 0, maze().width, maze().height, surface);
    drawAnimations(percent, surface);
  }

  public void render(Viewport viewport, int percent, Surface surface) {
    render(viewport, percent, surface, false);
  }
 
  public void render(Viewport viewport, int percent, Surface surface, boolean renderGridlines) {
    surface.saveTx();
    try {
      float scale = 1f * VIEWPORT_SIZE_TILES / viewport.size();
      surface.scale(scale, scale);

      int offsetX = -viewport.movingOriginXInPx(percent);
      int offsetY = -viewport.movingOriginYInPx(percent);
      surface.translate(offsetX, offsetY);

      renderRect(viewport.minXIncDelta(), viewport.minYIncDelta(), viewport.maxXIncDelta(), viewport.maxYIncDelta(), surface);
      if (renderGridlines && scale >= 0.5f) {
        renderGridlines(viewport.minXIncDelta(), viewport.minYIncDelta(), viewport.maxXIncDelta(), viewport.maxYIncDelta(), surface);
      }
      drawAnimations(percent, surface);
    } finally {
      surface.restoreTx();
    }
  }

  public void renderRect(int startX, int startY, int stopX, int stopY, Surface surface) {
    if (CACHE_ENABLED) {
      surface.draw(cache.getRender(this), 0, 0);
    } else {
      renderRectNoCache(startX, startY, stopX, stopY, surface);
    }
  }
  
  public void renderRectNoCache(int startX, int startY, int stopX, int stopY, DrawImage target) {
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

  private void renderGridlines(int startX, int startY, int stopX, int stopY, Surface surface) {
    int height = (stopY - startY) * TILE_SIZE;
    for (int x = startX; x < stopX; x++) {
      surface.fillRect(x * TILE_SIZE, startY * TILE_SIZE, 1, height, 0x88ffffff);
    }
    int width = (stopX - startX) * TILE_SIZE;
    for (int y = startY; y < stopY; y++) {
      surface.fillRect(startX * TILE_SIZE, y * TILE_SIZE, width, 1, 0x88ffffff);
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

  public void drawAnimations(int percent, Surface surface) {
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
    
