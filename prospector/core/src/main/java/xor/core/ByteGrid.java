package xor.core;

import java.util.Arrays;

public class ByteGrid extends BaseGrid {

  public final byte[] data;

  public ByteGrid(int width, int height) {
    this(new byte[width * height], width, height);
  }

  public ByteGrid(byte[] data, int width, int height) {
    super(width, height);
    if (data == null) throw new NullPointerException("data");
    if (data.length != width * height) throw new IllegalArgumentException("data.length");
    this.data = data;
  }

  public byte get(int index) {
    checkIndex(index);
    return data[index];
  }

  public void set(int index, int value) {
    checkIndex(index);
    data[index] = (byte) value;
  }

  public byte get(int x, int y) {
    return get(xyToIndex(x, y));
  }

  public byte safeGet(int x, int y) {
    if (isValidXY(x, y)) {
      return get(xyToIndex(x, y));
    }
    return 0;
  }

  public void set(int x, int y, int value) {
    set(xyToIndex(x, y), value);
  }

  public int find(int value) {
    byte byteValue = (byte) value;
    for (int i = 0; i < data.length; i++) {
      if (data[i] == byteValue) {
        return i;
      }
    }
    return -1;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < data.length; i++) {
      sb.append(hexByte(data[i]) + " ");
      if (i % width == 0) sb.append('\n');
    }
    return sb.toString();
  }

  public static String hexByte(int b) {
    return "" + (b & 0xff);
  }

  public boolean isSameByteGrid(ByteGrid that) {
    return this.isSameSize(that)
        && Arrays.equals(this.data, that.data);
  }
}

