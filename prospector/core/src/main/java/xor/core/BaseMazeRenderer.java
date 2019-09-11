package xor.core;

import static xor.core.PixelConstants.*;

import xor.core.Cells.CellType;

import playn.core.Image;

public class BaseMazeRenderer {

  protected Maze maze;

  public BaseMazeRenderer(Maze maze) {
    this.maze = maze;
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

  private void renderRect(int startX, int startY, int stopX, int stopY, Surface surface) {
    for (int x = startX; x < stopX; x++) {
      for (int y = startY; y < stopY; y++) {
        if (!maze().isValidXY(x, y)) {
          continue;
        }

        int cell = maze().get(x, y);
        if (drawFloor(x, y)) {
          surface.drawMapTile(getFloorTile(cell), x, y);
        }
        
        if (Cells.isWall(cell)) {
          if (drawWall(x, y)) {
            surface.drawMapTile(getWallTile(cell), x, y);
          }
        } else {
          if (drawSprite(x, y)) {
            surface.drawSpriteTile(getSpriteTile(cell), x, y);
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

  protected XorImage[] getThemedFloorTiles() {
    return Tiles.FLOOR_TILES[maze().floorTheme];
  }

  protected XorImage getFloorTile(int cell) {
    return getThemedFloorTiles()[Cells.floorType(cell)];
  }

  protected XorImage[] getThemedWallTiles() {
    return Tiles.WALL_TILES[maze().wallTheme];
  }

  protected XorImage getWallTile(int cell) {
    return getThemedWallTiles()[Cells.wallType(cell)];
  }

  protected XorImage getSpriteTile(int cell) {
    CellType cellType = Cells.cellType(cell);
    if (cellType == CellType.EMPTY || cellType == CellType.UNKNOWN) {
      return null;
    } else {
      return Sprites.CELLS[cellType.code];
    }
  }
}
    
