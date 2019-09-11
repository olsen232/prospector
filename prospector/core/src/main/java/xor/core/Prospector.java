package xor.core;

import static xor.core.PixelConstants.*;

import playn.core.Canvas;
import playn.core.Clock;
import playn.core.Image;
import playn.core.Keyboard;
import playn.core.Mouse;
import playn.core.Platform;
import playn.scene.ImageLayer;
import playn.scene.SceneGame;
import react.Slot;

public class Prospector extends SceneGame {

  static int FRAME_MS = 1000 / 30;

  private Menu menu;
  private ControlState controlState;
  private XorSurface surface;
  private boolean loadingFinished = false;
  private boolean titleLoaded = false;
  private boolean fontLoaded = false;
  private boolean isMusicCancelled = false;

  public Prospector(Platform plat, Toolkit.CanvasCreator canvasCreator) {
    this(plat);
    Toolkit.canvasCreator = canvasCreator;
  }

  public Prospector(Platform plat) {
    super(plat, FRAME_MS);
    surface = new XorSurface(viewSurf);
    surface.scaleFactor = plat.graphics().scale().factor;

    Toolkit.platform = plat;

    MenuGfx.start();
    Tiles.start();
    Sprites.start();
    Sounds.start(plat);
    Mazes.start(plat);

    controlState = new ControlState();

    plat.input().keyboardEnabled = true;
    plat.input().keyboardEvents.connect(new Slot<Keyboard.Event>() {
      public void onEmit(Keyboard.Event e) {
	if (e instanceof Keyboard.KeyEvent) {
	  Keyboard.KeyEvent ke = (Keyboard.KeyEvent) e;
          controlState.onKeyChange(ke.key, ke.down);
          if (!loadingFinished && ke.key == playn.core.Key.ESCAPE) {
            isMusicCancelled = true;
            Sounds.music = false;
          }
        }
      }
    });

    plat.input().mouseEnabled = true;
    plat.input().mouseEvents.connect(new Slot<Mouse.Event>() {
      public void onEmit(Mouse.Event e) {
	if (e instanceof Mouse.ButtonEvent) {
          controlState.onMouseChange((int) e.x, (int) e.y, ((Mouse.ButtonEvent) e).down);
	} else if (controlState.isMousePressed()) {
          controlState.onMouseDragged((int) e.x, (int) e.y);
        }
      }
    });
  }

  @Override
  public void update(Clock clock) {
    if (loadingFinished) {
      menu.tick(FRAME_MS);

    } else if (!fontLoaded && Toolkit.get("widefont.png") != null && Toolkit.get("widefont.png").isLoaded()) {
      MenuGfx.loadFont();
      fontLoaded = true;

    } else if (!titleLoaded && Toolkit.get("title.png") != null && Toolkit.get("title.png").isLoaded()) {
      MenuGfx.loadTitle();
      titleLoaded = true;

    } else if (Toolkit.isImagesLoaded() && Mazes.isLoaded() && Sounds.isLoaded() && (isMusicCancelled || Sounds.isMusicLoaded())) {
      MenuGfx.loadSidebar();
      Tiles.load();
      Sprites.load();
      Sounds.load();
      Mazes.load();

      menu = new Menu(controlState);
      menu.init(plat);

      controlState.clearFresh();
      if (!isMusicCancelled) {
        Sounds.get("partiture").play();
      }
      loadingFinished = true;
    }
  }

  private int frame = 0;

  @Override
  public void paintScene() {
    viewSurf.saveTx();
    viewSurf.begin();
    viewSurf.clear(0.0f, 0.0f, 0.0f, 1.0f);
    
    surface.setVariants(frame++, FRAME_MS);
    surface.scale(ZOOM, ZOOM);
    try {
      if (loadingFinished) {
        menu.renderAll(surface, viewSurf, FRAME_MS / 2);
      } else if (fontLoaded) {
        surface.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, 0xff000000);
        if (titleLoaded) {
          surface.drawImage(MenuGfx.TITLE, 0, 0);
          surface.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, 0x88000000);
        }
        renderLoadingProgress(surface);
      } else {
        viewSurf.clear(1.0f, 1.0f, 1.0f, 1.0f);
      }
      
    } finally {
      viewSurf.end();
      viewSurf.restoreTx();
    }
  }

  private void renderLoadingProgress(XorSurface xs) {
    xs.drawText(MenuGfx.YELLOW_FONT, Toolkit.imagesLoadedDesc(), 8 * 3, 8 * 3);
    xs.drawText(MenuGfx.YELLOW_FONT, Sounds.soundsLoadedDesc(), 8 * 3, 8 * 5);
    xs.drawText(MenuGfx.YELLOW_FONT, Sounds.musicLoadedDesc(), 8 * 3, 8 * 7);
    xs.drawText(MenuGfx.YELLOW_FONT, isMusicCancelled ? "Music cancelled" : "[Esc] to cancel music", 8 * 3, 8 * 9);
  }
}
