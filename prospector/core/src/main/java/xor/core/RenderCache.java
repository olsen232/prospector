package xor.core;

import static xor.core.PixelConstants.TILE_SIZE;

import xor.core.Cells.CellType;

public class RenderCache {
  private static final int MAX_SIZE = 24;

  private final Maze maze;
  private final CacheEntry[] table;
  private int validSize = 0;
  private int tableSize = 0;
  
  private CacheKey lookup = new CacheKey();
  
  public RenderCache(Maze maze) {
    this.maze = maze;
    this.table = new CacheEntry[MAX_SIZE];
  }

  public Image getRender(BaseMazeRenderer renderer) {
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
      entry = new CacheEntry(lookup.clone(), entireMazeCanvas());
      table[tableSize++] = entry;
      validSize++;
    }
    entry.canvas.clear();
    renderer.renderRectNoCache(0, 0, maze.width, maze.height, entry.canvas);
    entry.canvas.image.updateTexture();
    return entry.canvas.image;
  }
  
  public void invalidate() {
    validSize = 0;
  }
  
  private Canvas entireMazeCanvas() {
    return Platform.INSTANCE.createCanvas(maze.width * TILE_SIZE, maze.height * TILE_SIZE);
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