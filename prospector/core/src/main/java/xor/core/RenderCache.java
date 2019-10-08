package xor.core;

import static xor.core.PixelConstants.TILE_SIZE;

import xor.core.Cells.CellType;

public class RenderCache {
  private static final int MAX_SIZE = 24;

  private final CacheEntry[] table = new CacheEntry[MAX_SIZE];
  private int validSize = 0;
  private int tableSize = 0;
  
  private int widthPx = 0;
  private int heightPx = 0;
  
  private CacheKey lookup = new CacheKey();
  
  public void setSize(Maze maze) {
    setSize(maze.width * TILE_SIZE, maze.height * TILE_SIZE);
  }
  
  public void setSize(int widthPx, int heightPx) {
    if (this.widthPx != widthPx || this.heightPx != heightPx) {
      this.widthPx = widthPx;
      this.heightPx = heightPx;
      clearTable();
    }
    invalidate();
  }
  
  public void clearTable() {
    for (int i = 0; i < tableSize; i++) {
      table[i].canvas.image.close();
      table[i] = null;
    }
    validSize = tableSize = 0;
  }
  
  public void invalidate() {
    validSize = 0;
  }

  public Image renderAllStatic(BaseMazeRenderer renderer) {
    lookup.sprite = Sprites.CELLS[CellType.HERB.code].raw();
    lookup.wall = renderer.getThemedWallTiles()[0].raw();
    lookup.floor = renderer.getThemedFloorTiles()[0].raw();
    
    for (int i = 0; i < validSize; i++) {
      if (lookup.equals(table[i].key)) return table[i].canvas.image;
    }
    
    CacheEntry entry;
    if (tableSize > validSize) {
      entry = table[validSize++];
      entry.key.copyFrom(lookup);
    } else {
      entry = new CacheEntry(lookup.clone(), createCanvas());
      table[tableSize++] = entry;
      validSize++;
    }
    entry.canvas.clear();
    renderer.renderAllStaticNoCache(entry.canvas);
    entry.canvas.image.updateTexture();
    return entry.canvas.image;
  }
  
  private Canvas createCanvas() {
    return Platform.INSTANCE.createCanvas(widthPx, heightPx);
  }
  
  static class CacheEntry {
    CacheKey key;
    Canvas canvas;
    
    public CacheEntry(CacheKey key, Canvas canvas) {
      this.key = key;
      this.canvas = canvas;
    }
  }
  
  static class CacheKey {
    Object sprite;
    Object wall;
    Object floor;
    
    public void copyFrom(CacheKey that) {
      this.sprite = that.sprite;
      this.wall = that.wall;
      this.floor = that.floor;
    }
    
    public boolean equals(Object other) {
      if (!(other instanceof CacheKey)) return false;
      CacheKey that = (CacheKey) other;
      return this.sprite == that.sprite
          && this.wall == that.wall
          && this.floor == that.floor;
    }
    
    public CacheKey clone() {
      CacheKey result = new CacheKey();
      result.copyFrom(this);
      return result;
    }
  }
}