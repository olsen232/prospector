package xor.core;

import static xor.core.PixelConstants.TILE_SIZE;

public class EditorMazeRenderer extends BaseMazeRenderer {
  private static final int GRID_COLOR = 0x7fffffff;
  
  public boolean gridlines = false;

  public EditorMazeRenderer(Maze maze) {
    super(maze);
  }

  @Override
  public void renderRectStaticNoCache(int startX, int startY, int stopX, int stopY, DrawImage target) {
    super.renderRectStaticNoCache(startX, startY, stopX, stopY, target);
    if (gridlines) {
      renderGridlines(startX, startY, stopX, stopY, target);
    }
  }

  private void renderGridlines(int startX, int startY, int stopX, int stopY, DrawImage target) {
    int height = (stopY - startY) * TILE_SIZE;
    for (int x = startX; x < stopX; x++) {
      target.fillRect(x * TILE_SIZE, startY * TILE_SIZE, 1, height, GRID_COLOR);
    }
    int width = (stopX - startX) * TILE_SIZE;
    for (int y = startY; y < stopY; y++) {
      target.fillRect(startX * TILE_SIZE, y * TILE_SIZE, width, 1, GRID_COLOR);
    }
  }
}