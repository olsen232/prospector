package xor.html;

import com.google.gwt.dom.client.CanvasElement;
import com.google.gwt.dom.client.Document;
import com.google.gwt.core.client.EntryPoint;
import playn.html.HtmlPlatform;
import playn.html.HtmlGraphics;
import playn.html.HtmlCanvas;
import playn.html.HtmlImage;
import playn.core.Graphics;
import playn.core.Canvas;
import playn.core.Scale;
import xor.core.Prospector;
import xor.core.Toolkit;
import xor.core.LoadSave;

public class ProspectorHtml implements EntryPoint {

  @Override public void onModuleLoad () {
    LoadSave.asciiPrompt = new JavascriptAsciiPrompt();

    HtmlPlatform.Config config = new HtmlPlatform.Config();
    config.experimentalFullscreen = true;
    // use config to customize the HTML platform, if needed
    HtmlPlatform plat = new HtmlPlatform(config);
    plat.assets().setPathPrefix("prospector/");
    HtmlCanvasCreator cc = new HtmlCanvasCreator(plat.graphics());
    new Prospector(plat, cc);
    plat.start();
  }

  static class HtmlCanvasCreator implements Toolkit.CanvasCreator {
    private final Graphics graphics; 
    
    HtmlCanvasCreator(Graphics graphics) {
      this.graphics = graphics;
    }

    public Canvas createCanvas(int pixelWidth, int pixelHeight) {
      CanvasElement elem = Document.get().createCanvasElement();
      elem.setWidth(pixelWidth);
      elem.setHeight(pixelHeight);
      return new HtmlCanvas(graphics, new HtmlImage(graphics, Scale.ONE, elem, "<canvas>"));
    }
  }

  static class JavascriptAsciiPrompt implements LoadSave.AsciiPrompt {

    public native void prompt(String output) /*-{
      var d = window.top.document;
      var div = d.createElement('div');
      div.innerHTML = '<h2>Current state - copy this text to save, paste in text to load</h2>';
      div.style.textAlign = 'center';
      div.style.backgroundColor = '#ffffff';
      div.style.position = 'absolute';
      div.style.left = '25%';
      div.style.top = '25%';
      div.style.width = '50%';
      div.style.height = '50%';
      div.style.overflow = 'visible';

      var textArea = d.createElement('textArea');
      textArea.value = output;
      textArea.style.width = '100%';
      textArea.style.height = '100%';
      textArea.style.fontFamily = 'monospace';

      div.appendChild(textArea);

      var load = d.createElement('button');
      load.innerHTML = 'Load highscores / maze / replay';
      load.onclick = function() {
        @xor.core.Menu::load(Ljava/lang/String;)(textArea.value);
        d.body.removeChild(div);
      };
      div.appendChild(load);

      var cancel = d.createElement('button');
      cancel.innerHTML = 'Cancel';
      cancel.onclick = function() {
        @xor.core.Menu::load(Ljava/lang/String;)('');
        d.body.removeChild(div);
      };
      div.appendChild(cancel);

      d.body.appendChild(div);
    }-*/;

  }
}
