package xor.core;

import static xor.core.Direction.*;
import static xor.core.PixelConstants.TILE_SIZE;

public final class Tiles {
  private Tiles() {}

  public static Image TILES_RAW;
  public static final int NUM_THEMES = 15;
  public static final Image[][] FLOOR_TILES = new Image[NUM_THEMES][];
  public static final Image[][] WALL_TILES = new Image[NUM_THEMES][];

  public static final String TEMPLATE =
      "    " +
      "o---" +
      "|###" + 
      "|###" +
      "|###";

  public static final ByteGrid TEMPLATE_GRID =
      new ByteGrid(TEMPLATE.getBytes(), 4, 5);

  public static void startLoading() {
    TILES_RAW = Loader.loadImage("tiles.png");
  }

  public static void finishLoading() {
    Image[] themes = TILES_RAW.tile(4 * TILE_SIZE, 5 * TILE_SIZE + 1);
    for (int i = 0; i < NUM_THEMES; i++) {
      FLOOR_TILES[i] = new Image[Cells.NUM_FLOOR_TYPES];
      WALL_TILES[i] = new Image[Cells.NUM_WALL_TYPES];

      // TODO
      //Image xorTheme = Toolkit.xorImage(themes[i]);
      //if (i == 5) xorTheme = Toolkit.slow(xorTheme, 3);
      Image[] themeTiles = themes[i].tile(TILE_SIZE);

      int floorType = 0;
      for (int j = 0; j < TEMPLATE.length(); j++) {
        if (TEMPLATE.charAt(j) == ' ') {
          FLOOR_TILES[i][floorType++] = themeTiles[j];
        } else {
          WALL_TILES[i][getWallTypeFromTemplate(j)] = themeTiles[j];
        }
      }
    }
  }

  private static int getWallTypeFromTemplate(int index) {
    int x = TEMPLATE_GRID.indexToX(index);
    int y = TEMPLATE_GRID.indexToY(index);
    int wallType = 0;
    for (Direction d : Direction.values()) {
      if (TEMPLATE_GRID.safeGet(x, y) == TEMPLATE_GRID.safeGet(d.dx(x), d.dy(y))) {
        wallType |= d.bitCode;
      }
    } 
    return wallType;
  }
}

  
