package xor.core;

public final class Cells {
  private Cells() {}

  public enum CellType implements Codes.Coded {
    UNKNOWN,
    EMPTY   (0x00),
    PIP     (0x01),
    HERB    (0x02),
    ROCK    (0x03),
    ZEPPELIN(0x04),
    SPHERE  (0x05),
    BALLOON (0x06),
    DECOY   (0x07),
    MAP_NW  (0x08),
    MAP_NE  (0x09),
    MAP_SW  (0x0a),
    MAP_SE  (0x0b),
    TELEPORT(0x0c),
    FIELD_V (0x0d),
    FIELD_H (0x0e),
    TIN_BOMB(0x0f),
    DYNAMITE(0x10),
    EXIT    (0x11),
    // Wall is special:
    WALL    (0x20);

    public final int code;

    CellType() {
      this.code = Codes.NONE;
    }

    CellType(int code) {
      this.code = code;
    }

    @Override
    public int code() {
      return code;
    }
  }

  public static final CellType[] LOOKUP_TABLE =
      Codes.createLookupTable(CellType.values(), new CellType[0x20], CellType.UNKNOWN);

  public static final CellType[] ALL_CELL_TYPES = CellType.values();
  public static final int NUM_CELL_TYPES = ALL_CELL_TYPES.length;
  public static final int NUM_CELL_TYPE_BITS = 6;
  public static final int CELL_TYPE_MASK = setLowBits(NUM_CELL_TYPE_BITS);

  public static final int NUM_FLOOR_TYPES = 4;
  public static final int NUM_FLOOR_TYPE_BITS = 2;
  public static final int FLOOR_TYPE_MASK = setLowBits(NUM_FLOOR_TYPE_BITS) << NUM_CELL_TYPE_BITS;

  public static final int NUM_WALL_TYPES = 16;
  public static final int NUM_WALL_TYPE_BITS = 4;
  public static final int WALL_TYPE_MASK = setLowBits(NUM_WALL_TYPE_BITS);

  public static CellType cellType(int code) {
    code = code & CELL_TYPE_MASK;
    if (isWall(code)) {
      return CellType.WALL;
    } else {
      return LOOKUP_TABLE[code];
    }
  }

  public static boolean isWall(int code) {
    return (code & CellType.WALL.code) == CellType.WALL.code;
  }

  public static int wallType(int code) {
    if (!isWall(code)) {
      throw new IllegalArgumentException("Not a wall!");
    }
    return code & WALL_TYPE_MASK;
  }

  public static int floorType(int code) {
    return (code & FLOOR_TYPE_MASK) >> NUM_CELL_TYPE_BITS;
  }

  public static int encodeCell(CellType cellType, int floorType) {
    if (cellType == CellType.UNKNOWN) throw new IllegalArgumentException("Can't encode UNKNOWN");
    return cellType.code() | floorTypeToCode(floorType);
  }

  public static int encodeWallCell(int wallType, int floorType) {
    return wallTypeToCode(wallType) | floorTypeToCode(floorType);
  }

  public static int wallTypeToCode(int wallType) {
    return CellType.WALL.code | (wallType & WALL_TYPE_MASK);
  }

  public static int floorTypeToCode(int floorType) {
    return (floorType << NUM_CELL_TYPE_BITS) & FLOOR_TYPE_MASK;
  }

  public static int updateCellType(int code, CellType cellType) {
    if (cellType == CellType.UNKNOWN) throw new IllegalArgumentException("Can't encode UNKNOWN");
    return (code & FLOOR_TYPE_MASK) | cellType.code;
  }

  private static int setLowBits(int numBits) {
    if (numBits > 8) throw new IllegalArgumentException("numBits");
    return 0xff >> (8 - numBits);
  }
}
