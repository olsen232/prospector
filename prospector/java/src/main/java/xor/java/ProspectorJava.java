package xor.java;

import java.awt.image.BufferedImage;

import playn.java.LWJGLPlatform;
import playn.core.Graphics;
import playn.core.Canvas;
import playn.core.Scale;

import pythagoras.f.Dimension;
import pythagoras.f.IDimension;

import static xor.core.PixelConstants.*;

import xor.core.Prospector;
import xor.core.Platform;
import xor.core.LoadSave;
import xor.core.Menu;

import java.lang.reflect.Field;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.Font;
import java.awt.TextArea;
import java.awt.Button;
import java.awt.Label;
import java.awt.Panel;
import java.awt.Frame;
import java.awt.TextArea;
import javax.swing.Box;


public class ProspectorJava {

  public static void main (String[] args) {
    LoadSave.asciiPrompt = new AwtAsciiPrompt();

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

  static class AwtAsciiPrompt implements LoadSave.AsciiPrompt, ActionListener {
    Frame frame;
    TextArea textArea;
    Label title;
    Button load;
    Button cancel;

    public AwtAsciiPrompt() {
      frame = new Frame("Load / Save");
      frame.setUndecorated(true);
      Panel pane = new Panel();
      frame.add(pane);
      pane.setLayout(new BorderLayout());

      textArea = new TextArea();
      pane.add(textArea, BorderLayout.CENTER);

      title = new Label("Current state - copy this text to save, paste in text to load", Label.CENTER);
      pane.add(title, BorderLayout.PAGE_START);

      load = new Button("Load highscores / maze / replay");
      load.addActionListener(this);
      cancel = new Button("Cancel");
      cancel.addActionListener(this);

      Box buttons = Box.createHorizontalBox();
      buttons.add(buttons.createHorizontalGlue());
      buttons.add(load);
      buttons.add(cancel);
      buttons.add(buttons.createHorizontalGlue());
      pane.add(buttons, BorderLayout.PAGE_END);
    }

    public void prompt(String output) {
      textArea.setText(output);

      IDimension screen = Platform.INSTANCE.raw.graphics().screenSize();
      int fontSize = (int) (screen.height() * 0.008);
      textArea.setFont(new Font("monospaced", Font.PLAIN, fontSize));
      load.setFont(new Font("sansserif", Font.PLAIN, 2 * fontSize));
      cancel.setFont(new Font("sansserif", Font.PLAIN, 2 * fontSize));
      title.setFont(new Font("sansserif", Font.PLAIN, 3 * fontSize));

      frame.setBounds((int) screen.width() / 4, (int) screen.height() / 4, (int) screen.width() / 2, (int) screen.height() / 2);
      frame.setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
      if (e.getSource() == cancel) {
        Menu.load("");
        frame.setVisible(false);
      } else {
        Menu.load(textArea.getText());
        frame.setVisible(false);
      }
    }
  }
}
