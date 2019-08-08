package xor.core;

import java.util.AbstractList;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

public class SplicedArrayList<E> extends AbstractList<E> {
  private final List<E[]> parts = new ArrayList<E[]>();
  private int size = 0;

  public SplicedArrayList<E> add(E[] part) {
    parts.add(part);
    size += part.length;
    return this;
  }

  @Override
  public E get(int index) {
    if (index < 0 || index >= size) {
      throw new NoSuchElementException("Expected 0 <= index < " + size + ", but was: " + index);
    }
    for (E[] part : parts) {
      if (index < part.length) {
        return part[index];
      }
      index -= part.length;
    }
    throw new IllegalStateException();
  }

  @Override
  public E set(int index, E element) {
    if (index < 0 || index >= size) {
      throw new NoSuchElementException("Expected 0 <= index < " + size + ", but was: " + index);
    }
    for (E[] part : parts) {
      if (index < part.length) {
        E replaced = part[index];
        part[index] = element;
        return replaced;
      }
      index -= part.length;
    }
    throw new IllegalStateException();
  }

  @Override
  public int size() {
    return size;
  }

  public int offsetOfArray(E[] part) {
    int offset = 0;
    for (E[] p : parts) {
      if (p == part) return offset;
      offset += p.length;
    }
    throw new NoSuchElementException(part + " is not a part of " + this);
  }

  public int indexOfElement(E[] part, int arrayIndex) {
    return offsetOfArray(part) + arrayIndex;
  }
}
