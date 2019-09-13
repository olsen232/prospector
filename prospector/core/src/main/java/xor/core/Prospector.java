package xor.core;

import static xor.core.PixelConstants.*;

import playn.core.Canvas;
import playn.core.Clock;
import playn.core.Keyboard;
import playn.core.Mouse;
import playn.scene.SceneGame;
import react.Slot;

public class Prospector extends SceneGame {

  static int FRAME_MS = 1000 / 30;

  private Menu menu;
  private ControlState controlState;
  private Surface surface;
  private boolean loadingFinished = false;
  private boolean titleLoaded = false;
  private boolean fontLoaded = false;
  private boolean isMusicCancelled = false;

  public Prospector(Platform platform) {
    super(platform.raw, FRAME_MS);
    surface = new Surface(viewSurf);
    surface.scaleFactor = platform.raw.graphics().scale().factor;

    MenuGfx.startLoading();
    Tiles.startLoading();
    Sprites.startLoading();
    Sounds.startLoading();
    Mazes.startLoading();

    controlState = new ControlState();

    plat.input().keyboardEnabled = true;
    plat.input().keyboardEvents.connect(new Slot<Keyboard.Event>() {
      public void onEmit(Keyboard.Event e) {
	if (e instanceof Keyboard.KeyEvent) {
	  Keyboard.KeyEvent ke = (Keyboard.KeyEvent) e;
          controlState.onKeyChange(ke.key, ke.down);
          if (!loadingFinished && ke.key == playn.core.Key.ESCAPE) {
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

    } else if (!fontLoaded && MenuGfx.FONT_RAW.isLoaded()) {
      MenuGfx.finishLoadingFont();
      fontLoaded = true;

    } else if (!titleLoaded && MenuGfx.TITLE.isLoaded()) {
      MenuGfx.finishLoading();
      titleLoaded = true;

    } else if (Loader.isLoaded() && Mazes.isLoaded()) {
      Tiles.finishLoading();
      Sprites.finishLoading();
      Sounds.finishLoading();
      Mazes.finishLoading();

      Menu.INSTANCE = menu = new Menu(controlState, Mazes.XOR_MAZES, Mazes.PROCYON_MAZES);

      controlState.clearFresh();
      if (!isMusicCancelled) {
        Sounds.PARTITURE.play();
      }
      loadingFinished = true;
    }
  }

  private int frame = 0;

  @Override
  public void paintScene() {
    surface.saveTx();
    surface.begin();
    surface.clear(0, 0, 0, 1);
    
    surface.setVariants(frame++, FRAME_MS);
    surface.scale(ZOOM, ZOOM);
    
    try {
      if (loadingFinished) {
        menu.renderAll(surface, FRAME_MS / 2);
      } else if (fontLoaded) {
        surface.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, 0xff000000);
        if (titleLoaded) {
          surface.draw(MenuGfx.TITLE, 0, 0);
          surface.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT, 0x88000000);
        }
        renderLoadingProgress(surface);
      } else {
        viewSurf.clear(1, 1, 1, 1);
      }
      
    } finally {
      surface.end();
      surface.restoreTx();
    }
  }

  private void renderLoadingProgress(Surface surface) {
    surface.drawText(MenuGfx.YELLOW_FONT, Loader.imageText(), 8 * 3, 8 * 3);
    surface.drawText(MenuGfx.YELLOW_FONT, Loader.soundText(), 8 * 3, 8 * 5);
    surface.drawText(MenuGfx.YELLOW_FONT, Loader.musicText(), 8 * 3, 8 * 7);
    surface.drawText(MenuGfx.YELLOW_FONT, Sounds.music ? "[Esc] to cancel music" :  "Music cancelled", 8 * 3, 8 * 9);
  }
}
