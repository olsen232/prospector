package xor.core;

import xor.core.Cells.CellType;

import java.util.Arrays;

public class Maze extends ByteGrid {
  public static final int STANDARD_GRID_SIZE = 32;

  private String title = "";

  public int wallTheme;
  public int floorTheme;

  public Maze() {
    this("", STANDARD_GRID_SIZE);
  }

  public Maze(String title) {
    this(title, STANDARD_GRID_SIZE);
  }

  public Maze(String title, int size) {
    this(title, size, size);
  }

  public Maze(String title, int width, int height) {
    this(title, width, height, 0, 0);
  }

  public Maze(String title, int width, int height, int wallTheme, int floorTheme) {
    super(width, height);
    this.title = (title != null) ? title : "";
    this.wallTheme = wallTheme;
    this.floorTheme = floorTheme;
  }

  public void setTitle(String title) {
    this.title = (title != null) ? title : "";
  }

  public String title() {
    return title;
  }

  public void updateWallType(int x, int y) {
    if (!Cells.isWall(safeGet(x, y))) return;
   
    int wallTypeCode = 0;
    for (Direction d : Direction.values()) {
      if (Cells.isWall(safeGet(d.dx(x), d.dy(y)))) {
        wallTypeCode |= d.bitCode;
      }
    }
    set(x, y, CellType.WALL.code | wallTypeCode);
  }

  public void updateNeighbouringWalls(int x, int y) {
    updateWallType(x, y);
    for (Direction d : Direction.ALL_DIRECTIONS) {
      updateWallType(d.dx(x), d.dy(y));
    }
  }

  public void updateAllWalls() {
    for (int x = 0; x < width; x++) {
      for (int y = 0; y < height; y++) {
        updateWallType(x, y);
      }
    }
  }

  public CellType safeGetCellType(int x, int y) {
    return Cells.cellType(safeGet(x, y));
  }

  public CellType getCellType(int x, int y) {
    return Cells.cellType(get(x, y));
  }

  public int findCellType(CellType cellType) {
    for (int i = 0; i < data.length; i++) {
      if (Cells.cellType(data[i]) == cellType) {
        return i;
      }
    }
    return -1;
  }

  public int findCellType(CellType cellType, int startIndex) {
    for (int i = 0; i < data.length; i++) {
      int index = (startIndex + i) % data.length;
      if (Cells.cellType(data[index]) == cellType) {
        return index;
      }
    }
    return -1;
  }

  public int countCellType(CellType cellType) {
    int count = 0;
    for (int i = 0; i < data.length; i++) {
      if (Cells.cellType(data[i]) == cellType) {
        count++;
      }
    }
    return count;
  }

  public CellType updateCellType(int x, int y, CellType newCellType) {
    int oldCode = get(x, y);
    int newCode = Cells.updateCellType(oldCode, newCellType);
    set(x, y, newCode);
    if (Cells.isWall(oldCode) != Cells.isWall(newCode)) {
      updateNeighbouringWalls(x, y);
    }
    return Cells.cellType(oldCode);
  }

  @Override
  public String toString() {
    return title + "\n" + super.toString();
  }

  public Maze clone() {
    Maze clone = new Maze(title, width, height, wallTheme, floorTheme);
    System.arraycopy(data, 0, clone.data, 0, data.length);
    return clone;
  }
}
