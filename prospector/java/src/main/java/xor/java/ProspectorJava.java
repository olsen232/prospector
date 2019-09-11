package xor.java;

import java.awt.image.BufferedImage;

import playn.java.LWJGLPlatform;
import playn.core.Graphics;
import playn.core.Canvas;
import playn.core.Scale;

import static xor.core.PixelConstants.*;

import xor.core.Prospector;
import xor.core.Platform;

import java.lang.reflect.Field;

public class ProspectorJava {

  public static void main (String[] args) {
    LWJGLPlatform.Config config = new LWJGLPlatform.Config();
    config.width = SCREEN_WIDTH * ZOOM;
    config.height = SCREEN_HEIGHT * ZOOM;
    LWJGLPlatform raw = new LWJGLPlatform(config);
    Platform platform = new Platform(raw);
    platform.canvasCreator = new JavaCanvasCreator(raw.graphics());    
    new Prospector(platform);
    raw.start();
  }
  
  static class JavaCanvasCreator implements Platform.CanvasCreator {
    private final Graphics graphics; 
    
    JavaCanvasCreator(Graphics graphics) {
      this.graphics = graphics;
    }

    public Canvas create(int pixelWidth, int pixelHeight) {
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
