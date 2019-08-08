package xor.core;

public class BaseGrid {

  public final int width;
  public final int height;

  public BaseGrid(int width, int height) {
    this.width = width;
    this.height = height;
  }

  public void checkXY(int x, int y) {
    checkX(x);
    checkY(y);
  }

  public void checkX(int x) {
    checkBounds("x", x, width);
  }

  public void checkY(int y) {
    checkBounds("y", y, height);
  }

  public void checkIndex(int index) {
    checkBounds("index", index, width * height);
  }

  public boolean isValidXY(int x, int y) {
    return isValidX(x) && isValidY(y);
  }

  public boolean isValidX(int x) {
    return isInBounds(x, width);
  }

  public boolean isValidY(int y) {
    return isInBounds(y, height);
  }

  public boolean isValidIndex(int index) {
    return isInBounds(index, width * height);
  }

  public int xyToIndex(int x, int y) {
    checkXY(x, y);
    return y * width + x;
  }

  public int indexToX(int index) {
    checkIndex(index);
    return index % width;
  }

  public int indexToY(int index) {
    checkIndex(index);
    return index / width;
  }

  public static void checkBounds(String var, int index, int size) {
    if (!isInBounds(index, size)) {
      throw new IllegalArgumentException(
          "Index outside grid: Should be 0 <= " + var + " < " + size + " but was: "+ index);
    }
  }

  public static boolean isInBounds(int index, int size) {
    return (0 <= index) && (index < size);
  }

  public boolean isSameSize(BaseGrid that) {
    return this.width == that.width
        && this.height == that.height;
  }
}
