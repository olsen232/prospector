package xor.core;

import playn.core.Image;

public class XorImage {

  public final Image[] variants;
  private Image[] zoomedVariants;

  public XorImage(int numVariants) {
    this.variants = new Image[numVariants];
  }

  public XorImage(Image[] variants) {
    this.variants = variants;
  }

  public Image variant(int v) {
    if (variants.length == 1) return variants[0];
    return variants[v % variants.length];
  }

  public Image zoomedVariant(int v) {
    if (zoomedVariants == null) {
      zoomedVariants = new Image[variants.length];
      for (int i = 0; i < variants.length; i++) {
        zoomedVariants[i] = Toolkit.zoom(variants[i]);
      }
    }
    if (zoomedVariants.length == 1) return zoomedVariants[0];
    return zoomedVariants[v % variants.length];
  }

  public int width() {
    return (int) variants[0].width();
  }

  public int height() {
    return (int) variants[0].height();
  }
}
