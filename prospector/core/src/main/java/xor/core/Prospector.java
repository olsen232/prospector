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
  private int updatedAtMs;

  public Prospector(Platform platform) {
    super(platform.raw, FRAME_MS);
    surface = new Surface(viewSurf);
    surface.clipFactor = platform.raw.graphics().scale().factor * platform.zoom;

    MenuGfx.startLoading();
    Font.startLoading();
    Tiles.startLoading();
    Sprites.startLoading();
    Sounds.startLoading();
    Mazes.startLoading();

    controlState = new ControlState();

    plat.input().keyboardEnabled = true;
    plat.input().keyboardEvents.connect(keySlot);

    plat.input().mouseEnabled = true;
    plat.input().mouseEvents.connect(mouseSlot);
  }

  @Override
  public void update(Clock clock) {
    updatedAtMs = Platform.INSTANCE.raw.tick();
    if (loadingFinished) {
      menu.tick(FRAME_MS);
      Animator.tick(FRAME_MS);

    } else if (!fontLoaded && Font.RAW.isLoaded()) {
      Font.finishLoading();
      fontLoaded = true;

    } else if (!titleLoaded && MenuGfx.TITLE.isLoaded()) {
      MenuGfx.finishLoading();
      titleLoaded = true;

    } else if (Image.LOAD_TRACKER.isLoaded() &&
               Sound.LOAD_TRACKER.isLoaded() &&
               (Sounds.music ? Sound.MUSIC_LOAD_TRACKER.isLoaded() : true) &&
               Mazes.isLoaded()) {
      Tiles.finishLoading();
      Sprites.finishLoading();
      Sounds.finishLoading();
      Mazes.finishLoading();

      Menu.INSTANCE = menu = new Menu(controlState, Mazes.XOR_MAZES, Mazes.PROCYON_MAZES);

      controlState.clearFresh();
      if (Sounds.music) {
        Sounds.PARTITURE.play();
      }
      loadingFinished = true;
    }
  }

  @Override
  public void paintScene() {
    int deltaMs = Platform.INSTANCE.raw.tick() - updatedAtMs;
  
    surface.saveTx();
    surface.begin();
    surface.clear(0, 0, 0, 1);
    
    surface.scale(Platform.INSTANCE.zoom, Platform.INSTANCE.zoom);
    
    try {
      if (loadingFinished) {
        menu.renderAll(surface, deltaMs);
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
    Font.YELLOW.singleLine(surface, "Images: " + Image.LOAD_TRACKER.text(), 8 * 3, 8 * 3);
    Font.YELLOW.singleLine(surface, "Sounds: " + Sound.LOAD_TRACKER.text(), 8 * 3, 8 * 5);
    Font.YELLOW.singleLine(surface, "Music: " + Sound.MUSIC_LOAD_TRACKER.text(), 8 * 3, 8 * 7);
    Font.YELLOW.singleLine(surface, Sounds.music ? "[Esc] to cancel music" :  "Music cancelled", 8 * 3, 8 * 9);
  }
  
  private Slot<Keyboard.Event> keySlot = new Slot<Keyboard.Event>() {
    public void onEmit(Keyboard.Event e) {
	  if (e instanceof Keyboard.KeyEvent) {
	    Keyboard.KeyEvent ke = (Keyboard.KeyEvent) e;
        controlState.onKeyChange(ke.key, ke.down);
        if (!loadingFinished && ke.key == playn.core.Key.ESCAPE) {
          Sounds.music = false;
        }
      }
    }
  };
  
  private Slot<Mouse.Event> mouseSlot = new Slot<Mouse.Event>() {
    public void onEmit(Mouse.Event e) {
	  if (e instanceof Mouse.ButtonEvent) {
        controlState.onMouseChange((int) e.x, (int) e.y, ((Mouse.ButtonEvent) e).down);
      } else if (controlState.isMousePressed()) {
        controlState.onMouseDragged((int) e.x, (int) e.y);
      }
    }
  };
}
