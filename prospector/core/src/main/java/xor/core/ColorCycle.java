package xor.core;

import java.util.ArrayList;
import java.util.List;

public class ColorCycle {
  public static ColorCycle EMPTY = new ColorCycle();

  public final ArrayList<Integer> edges = new ArrayList<Integer>();
  private int[] edgesInts;
  private int maxCycleLength = 0;  

  public void addCycle(List<Integer> cycle) {
    int lastIndex = cycle.size() - 1;
    for (int i = 0; i < lastIndex; i++) {
      addEdge(cycle.get(i), cycle.get(i + 1));
    }
    addEdge(cycle.get(lastIndex), cycle.get(0));
    maxCycleLength = Math.max(maxCycleLength, cycle.size());
  }
  
  private void addEdge(int from, int to) {
    edges.add(from);
    edges.add(to);
  }
  
  public Image apply(Image in, Animator animator) {
    if (maxCycleLength <= 1) {
      return in;
    }
    
    Image[] frames = new Image[maxCycleLength];
    frames[0] = in;
    int[] pixels = in.getPixels();
    for (int i = 1; i < frames.length; i++) {
      Canvas canvas = Platform.INSTANCE.createCanvas(in.width(), in.height());
      stepThroughCycle(pixels);
      canvas.image.setPixels(pixels);
      frames[i] = canvas.image;
    }
    return new AnimatedImage(animator, frames);
  }
  
  private void stepThroughCycle(int[] pixels) {
    if (edgesInts == null) {
      edgesInts = toIntArray(edges);
    }
  
    for (int i = 0; i < pixels.length; i++) {
      int pixel = pixels[i];
      for (int e = 0; e < edgesInts.length; e += 2) {
        if (pixel == edgesInts[e]) {
          pixels[i] = edgesInts[e + 1];
          break;
        }
      }
    }
  }
  
  public static ColorCycle fromPixelRow(int[] pixelRow) {
    return fromColors(findColors(pixelRow));
  }
  
  public static ColorCycle fromColors(List<Integer> colors) {
    if (colors.size() <= 1) return ColorCycle.EMPTY;
    
    ColorCycle result = new ColorCycle();
    int start = 0;
    for (int i = 0; i < colors.size(); i++) {
      if (colors.get(i) == 0) {
        result.addCycle(colors.subList(start, i));
        start = i + 1;
      }
    }
    return result;
  }
  
  private static List<Integer> findColors(int[] pixelRow) {
    int prevColor = 0;
    List<Integer> result = new ArrayList<Integer>();
    for (int i = 0; i < pixelRow.length; i++) {
      int color = pixelRow[i];
      if ((color & 0xff000000) == 0) color = 0;
      if (color != prevColor) {
        result.add(color);
        prevColor = color;
      }
    }
    if (prevColor != 0) result.add(0);
    return result;
  }
  
  private static int[] toIntArray(List<Integer> list) {
    int[] result = new int[list.size()];
    for (int i = 0; i < result.length; i++) {
      result[i] = list.get(i);
    }
    return result;
  }
}