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
import xor.core.Platform;

import static xor.core.PixelConstants.*;

public class ProspectorHtml implements EntryPoint {

  @Override public void onModuleLoad () {
    playn.html.HtmlPlatform.Config config = new playn.html.HtmlPlatform.Config();
    playn.html.HtmlPlatform raw = new playn.html.HtmlPlatform(config);
    HtmlPlatform platform = new HtmlPlatform(raw);
    raw.assets().setPathPrefix("prospector/");
    new Prospector(platform);
    raw.start();
  }

  static class HtmlPlatform extends Platform {    
    HtmlPlatform(playn.html.HtmlPlatform raw) {
      super(raw);
    }

    @Override
    public void setSize(int width, int height) {
      ((playn.html.HtmlGraphics) raw.graphics()).setSize(width, height);
    }

    @Override
    public native void copyToClipboard(String text) /*-{
      navigator.clipboard.writeText(text);
    }-*/;

    @Override
    public native String pasteFromClipboard() /*-{
      return navigator.clipboard.readText();
    }-*/;

    @Override
    public playn.core.Canvas createRawCanvas(int pixelWidth, int pixelHeight) {
      CanvasElement elem = Document.get().createCanvasElement();
      elem.setWidth(pixelWidth);
      elem.setHeight(pixelHeight);
      return new HtmlCanvas(raw.graphics(), new HtmlImage(raw.graphics(), Scale.ONE, elem, "<canvas>"));
    }
  }
}
