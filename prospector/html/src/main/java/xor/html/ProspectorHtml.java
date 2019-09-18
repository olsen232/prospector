package xor.html;

import com.google.gwt.dom.client.CanvasElement;
import com.google.gwt.dom.client.Document;
import com.google.gwt.core.client.EntryPoint;
import playn.html.HtmlGraphics;
import playn.html.HtmlCanvas;
import playn.html.HtmlImage;
import playn.core.Canvas;
import playn.core.Scale;
import xor.core.Prospector;
import xor.core.LoadSave;
import xor.core.Platform;

import static xor.core.PixelConstants.*;

public class ProspectorHtml implements EntryPoint {

  @Override public void onModuleLoad () {
    LoadSave.asciiPrompt = new JavascriptAsciiPrompt();

    playn.html.HtmlPlatform.Config config = new playn.html.HtmlPlatform.Config();
    playn.html.HtmlPlatform raw = new playn.html.HtmlPlatform(config);
    HtmlPlatform platform = new HtmlPlatform(raw);
    raw.assets().setPathPrefix("prospector/");
    raw.graphics().setSize((int) (SCREEN_WIDTH * platform.zoom), (int) (SCREEN_HEIGHT * platform.zoom));
    new Prospector(platform);
    raw.start();
  }

  static class HtmlPlatform extends Platform {    
    HtmlPlatform(playn.html.HtmlPlatform raw) {
      super(raw);
    }

    @Override
    public playn.core.Canvas createRawCanvas(int pixelWidth, int pixelHeight) {
      CanvasElement elem = Document.get().createCanvasElement();
      elem.setWidth(pixelWidth);
      elem.setHeight(pixelHeight);
      return new HtmlCanvas(raw.graphics(), new HtmlImage(raw.graphics(), Scale.ONE, elem, "<canvas>"));
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
