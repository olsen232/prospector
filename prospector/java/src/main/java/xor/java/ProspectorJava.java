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
import javax.swing.Box;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JFrame;
import javax.swing.JTextArea;
import javax.swing.SwingConstants;

public class ProspectorJava {

  public static void main (String[] args) {
    LoadSave.asciiPrompt = new SwingAsciiPrompt();

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

  static class SwingAsciiPrompt implements LoadSave.AsciiPrompt, ActionListener {
    JFrame frame;
    JTextArea textArea;
    JButton load;
    JButton cancel;

    public SwingAsciiPrompt() {
      frame = new javax.swing.JFrame("Load / Save");
      frame.setUndecorated(true);
      Container pane = frame.getContentPane();
      textArea = new JTextArea();
      textArea.setFont(new Font("monospaced", Font.PLAIN, 16));
      pane.add(textArea, BorderLayout.CENTER);
      JLabel label = new JLabel("Current state - copy this text to save, paste in text to load", SwingConstants.CENTER);
      label.setFont(label.getFont().deriveFont(30f));
      pane.add(label, BorderLayout.PAGE_START);

      Box buttons = Box.createHorizontalBox();
      buttons.setAlignmentX(java.awt.Component.CENTER_ALIGNMENT);

      load = new JButton("Load highscores / maze / replay");
      load.setFont(label.getFont().deriveFont(20f));
      load.addActionListener(this);
      cancel = new JButton("Cancel");
      cancel.setFont(label.getFont().deriveFont(20f));
      cancel.addActionListener(this);
      buttons.add(buttons.createHorizontalGlue());
      buttons.add(load);
      buttons.add(cancel);
      buttons.add(buttons.createHorizontalGlue());

      pane.add(buttons, BorderLayout.PAGE_END);
    }

    public void prompt(String output) {
      textArea.setText(output);
      IDimension screen = Platform.INSTANCE.raw.graphics().screenSize();
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
