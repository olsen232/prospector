package xor.java;

import java.awt.image.BufferedImage;

import playn.java.LWJGLPlatform;
import playn.core.Graphics;
import playn.core.Canvas;
import playn.core.Scale;

import pythagoras.f.Dimension;
import pythagoras.f.IDimension;

import static xor.core.PixelConstants.*;

import xor.core.Clipboard;
import xor.core.Prospector;
import xor.core.Platform;

import java.awt.Toolkit;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.StringSelection;

import java.lang.reflect.Field;

public class ProspectorJava {

  public static void main (String[] args) {
    new JavaClipboard(Toolkit.getDefaultToolkit().getSystemClipboard());

    LWJGLPlatform.Config config = new LWJGLPlatform.Config();
    config.appName = "Prospector in the Mazes of XOR";
    LWJGLPlatform raw = new LWJGLPlatform(config);
    JavaPlatform platform = new JavaPlatform(raw);
    new Prospector(platform);
    raw.start();
  }
  
  static class JavaPlatform extends Platform { 
    JavaPlatform(LWJGLPlatform raw) {
      super(raw);
    }

    public void setSize(int width, int height) {
      try {
        Field f = Graphics.class.getDeclaredField("scale");
        f.setAccessible(true);
        Scale temp = (Scale) f.get(raw.graphics());
        ((playn.java.JavaGraphics) raw.graphics()).setSize(width, height, false);
        f.set(raw.graphics(), temp);
      } catch (Exception e) {
        throw new RuntimeException(e);
      }
    }

    @Override
    public Canvas createRawCanvas(int pixelWidth, int pixelHeight) {
      try {
        Field f = Graphics.class.getDeclaredField("scale");
        f.setAccessible(true);
        Scale temp = (Scale) f.get(raw.graphics());
        f.set(raw.graphics(), Scale.ONE);
        Canvas canvas = raw.graphics().createCanvas(pixelWidth, pixelHeight);
        f.set(raw.graphics(), temp);
        return canvas;
      } catch (Exception e) {
        throw new RuntimeException(e);
      }
    }
    
    @Override
    public IDimension availableArea() {
      IDimension screenSize = raw.graphics().screenSize();
      return new Dimension(0.8f * screenSize.width(), 0.8f * screenSize.height());
    }

    @Override
    public void exit() {
      System.exit(0);
    }
  }

  static class JavaClipboard extends Clipboard {
    public final java.awt.datatransfer.Clipboard raw;

    JavaClipboard(java.awt.datatransfer.Clipboard raw) {
      this.raw = raw;
    }

    @Override
    public void writeToSystem(String text) {
      raw.setContents(new StringSelection(text), null);
    }

    @Override
    public boolean canWriteToSystem() { return true; }

    @Override
    public String readFromSystem() {
      try {
        return (String) raw.getData(DataFlavor.stringFlavor);
      } catch (Exception e) {
        return "";
      }
    }

    @Override
    public boolean canReadFromSystem() { return true; }
  }
}
