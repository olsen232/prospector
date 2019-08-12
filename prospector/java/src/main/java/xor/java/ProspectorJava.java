package xor.java;

import java.awt.image.BufferedImage;

import playn.java.LWJGLPlatform;
import playn.core.Graphics;
import playn.core.Canvas;
import playn.core.Scale;

import static xor.core.PixelConstants.*;

import xor.core.Prospector;
import xor.core.Toolkit;

import java.lang.reflect.Field;

public class ProspectorJava {

  public static void main (String[] args) {
    LWJGLPlatform.Config config = new LWJGLPlatform.Config();
    config.width = SCREEN_WIDTH * ZOOM;
    config.height = SCREEN_HEIGHT * ZOOM;
    LWJGLPlatform plat = new LWJGLPlatform(config);
    JavaCanvasCreator cc = new JavaCanvasCreator(plat.graphics());
    new Prospector(plat, cc);
    plat.start();
  }
  
  static class JavaCanvasCreator implements Toolkit.CanvasCreator {
    private final Graphics graphics; 
    
    JavaCanvasCreator(Graphics graphics) {
      this.graphics = graphics;
    }

    public Canvas createCanvas(int pixelWidth, int pixelHeight) {
      try {
        Field f = Graphics.class.getDeclaredField("scale");
        f.setAccessible(true);
        Scale temp = (Scale) f.get(graphics);
        f.set(graphics, Scale.ONE);
        Canvas canvas = graphics.createCanvas(pixelWidth, pixelHeight);
        f.set(graphics, temp);
        return canvas;
      } catch (Exception e) {
        throw new RuntimeException(e);
      }
    }
  }
}
