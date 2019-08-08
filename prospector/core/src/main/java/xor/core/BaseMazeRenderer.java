package xor.core;

import static xor.core.PixelConstants.*;

import xor.core.Cells.CellType;

import playn.core.Image;

public class BaseMazeRenderer {

  protected Maze maze;

  public BaseMazeRenderer(Maze maze) {
    this.maze = maze;
  }

  public void renderAll(int percent, XorSurface xs) {
    renderRect(0, 0, maze().width, maze().height, xs);
    drawAnimations(percent, xs);
  }

  public void render(Viewport viewport, int percent, XorSurface xs) {
    render(viewport, percent, xs, false);
  }
 
  public void render(Viewport viewport, int percent, XorSurface xs, boolean renderGridlines) {
    float scale = 1f * VIEWPORT_SIZE_TILES / viewport.size();
    xs.surface.scale(scale, scale);

    int offsetX = -viewport.movingOriginXInPx(percent);
    int offsetY = -viewport.movingOriginYInPx(percent);
    xs.translate(offsetX, offsetY);

    renderRect(viewport.minXIncDelta(), viewport.minYIncDelta(), viewport.maxXIncDelta(), viewport.maxYIncDelta(), xs);
    if (renderGridlines && scale >= 0.5f) {
      renderGridlines(viewport.minXIncDelta(), viewport.minYIncDelta(), viewport.maxXIncDelta(), viewport.maxYIncDelta(), xs);
    }
    drawAnimations(percent, xs);

    xs.translate(-offsetX, -offsetY);

    xs.surface.scale(1f / scale, 1f / scale);
  }

  private void renderRect(int startX, int startY, int stopX, int stopY, XorSurface xs) {
    for (int x = startX; x < stopX; x++) {
      for (int y = startY; y < stopY; y++) {
        if (!maze().isValidXY(x, y)) {
          continue;
        }

        int cell = maze().get(x, y);
        if (drawFloor(x, y)) {
          xs.drawMapTile(getFloorTile(cell), x, y);
        }
        
        if (Cells.isWall(cell)) {
          if (drawWall(x, y)) {
            xs.drawMapTile(getWallTile(cell), x, y);
          }
        } else {
          if (drawSprite(x, y)) {
            xs.drawSpriteTile(getSpriteTile(cell), x, y);
          }
        }
      }
    }
  }

  private void renderGridlines(int startX, int startY, int stopX, int stopY, XorSurface xs) {
    int height = (stopY - startY) * TILE_SIZE;
    for (int x = startX; x < stopX; x++) {
      xs.fillRect(x * TILE_SIZE, startY * TILE_SIZE, 1, height, 0x88ffffff);
    }
    int width = (stopX - startX) * TILE_SIZE;
    for (int y = startY; y < stopY; y++) {
      xs.fillRect(startX * TILE_SIZE, y * TILE_SIZE, width, 1, 0x88ffffff);
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

  public void drawAnimations(int percent, XorSurface xs) {
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
    
