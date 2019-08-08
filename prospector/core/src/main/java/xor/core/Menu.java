package xor.core;

import static xor.core.PixelConstants.*;
import xor.core.Cells.CellType;
import xor.core.LoadSave.Loaded;

import playn.core.Image;
import playn.core.Platform;
import playn.core.Surface;
import java.util.List;
import java.io.ByteArrayInputStream;

public class Menu {

  private static final int INTRO_TIMEOUT_MS = 10000;

  private ListMenu[] lists;
  private int activeListIndex;
  private ControlState controlState;
  private MazeController mazeController = new MazeController();

  private boolean intro = true;
  private int menuMs = 0;
  private boolean loadSave = false;

  private LevelEditor levelEditor;

  private static Menu instance;

  public Menu(ControlState controlState) {
    this.controlState = controlState;
    levelEditor = new LevelEditor(LevelEditor.defaultEditorMaze(), controlState);
    instance = this;
  }

  public void init(Platform plat) {
    try {
      lists = new ListMenu[] {
          new ListMenu("Mazes of Xor",
              AsciiMazeLoader.loadList(Mazes.XOR_MAZES),
              Direction.RIGHT),
          null,
          new ListMenu("Mazes of Procyon",
              AsciiMazeLoader.loadList(Mazes.PROCYON_MAZES),
              Direction.LEFT),
      };
      activeListIndex = 1;
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
  }

  private boolean exitIntro() {
    return controlState.isAnyFreshControl()
        || controlState.isAnyFreshExtraControl()
        || controlState.isFreshMouseClick()
        || menuMs > INTRO_TIMEOUT_MS;
  }

  private void handleMenuControls() {
    if (intro && exitIntro()) {
      intro = false;
      menuMs = 0;
      return;
    }
    if (loadSave) {
      return;
    }

    Control c = controlState.freshControl();
    if (c != null && activeList() != null) {
      if (c == Control.OK) {
        mazeController = new MazeController(activeList().selected(), controlState,
            new HighscoreCallback(activeListIndex, activeList().selectedIndex()));
        mazeController.reset();
      } else if (c.direction.isVertical()) {
        activeList().upOrDown(c.direction);
      }
    }

    if (c != null && c.direction != null && c.direction.isHorizontal()) {
      activeListIndex = Ints.clamp(c.direction.dx(activeListIndex), 0, 2);
      menuMs = 0;
    }

    if (controlState.isFresh(ExtraControl.BACK) && activeListIndex != 1) {
      activeListIndex = 1;
    }

    if (activeListIndex == 1) {
      if (controlState.isFreshClickInsideViewport(0, 40, 96, 40)) {
        activeListIndex = 0;
      } else if (controlState.isFreshClickInsideViewport(96, 40, 96, 40)) {
        activeListIndex = 2;
      } else if (controlState.isFreshClickInsideViewport(8, 134, 84, 20)) {
        loadSave = LoadSave.save(lists[0], lists[2], mazeController, levelEditor.customMazeOrNull());
      } else if (controlState.isFreshClickInsideViewport(99, 134, 84, 20)) {
        levelEditor.setActive(true);
      }
    } else if (activeList().isMazeClicked(controlState)) {
      mazeController = new MazeController(activeList().selected(), controlState,
          new HighscoreCallback(activeListIndex, activeList().selectedIndex()));
      mazeController.reset();
    } else if (activeList().isBackClicked(controlState)) {
      activeListIndex = 1;
    }
  }

  public static void load(String s) {
    instance.loadInstance(s);
  }

  public void loadInstance(String s) {
    loadSave = false;
    Loaded loaded = LoadSave.load(s, lists[0], lists[2]);
    if (loaded == null) {
      return;
    }
    if (loaded.customLevel != null) {
      levelEditor = new LevelEditor(loaded.customLevel, controlState);
      levelEditor.setActive(true);
    }
    if (loaded.replay != null && loaded.selectedList == -1) {
      mazeController = new MazeController(loaded.customLevel, controlState, null);
      mazeController.movesOut = loaded.replay;
      mazeController.startReplay();
    } else if (loaded.replay != null) {
      activeListIndex = loaded.selectedList;
      activeList().setSelectedIndex(loaded.selectedIndex);
      mazeController = new MazeController(activeList().selected(), controlState,
          new HighscoreCallback(activeListIndex, activeList().selectedIndex()));
      mazeController.movesOut = loaded.replay;
      mazeController.startReplay();
    }
  }

  private void handleGlobalControls() {
    if (levelEditor.isActive() && !mazeController.isActive()) {
      return;  // Global controls are hidden in editor mode.
    }

    if (controlState.isFreshMusicClick()) {
      Sounds.music = !Sounds.music;
      if (Sounds.music) {
        Sounds.get("partiture").play();
      } else {
        Sounds.get("partiture").stop();
      }
    } else if (controlState.isFreshSoundClick()) {
      Sounds.sounds = !Sounds.sounds;
      if (Sounds.sounds) {
        Sounds.get("thump").play();
      }
    } else if (controlState.isFreshReplayClick()) {
      if (mazeController.callback instanceof HighscoreCallback) {
        ((HighscoreCallback) mazeController.callback).selectMaze();
      }
      mazeController.startReplay();
    } else if (controlState.isFreshExitClick()) {
      if (mazeController.isReplaying()) {
        mazeController.abortReplay();
      } else if (mazeController.isActive()) {
        mazeController.setActive(false);
      } else if (levelEditor.isActive()) {
        levelEditor.setActive(false);
      }
    }
  }

  public void tick(int ms) {
    if (mazeController.isActive()) {
      mazeController.tick(ms);

    } else if (levelEditor.isActive()) {
      levelEditor.tick(ms);
      if (controlState.isFresh(ExtraControl.PLAY) || controlState.isFreshPlayClick()) {
        mazeController = new MazeController(levelEditor.maze(), controlState, null);
        mazeController.reset();
        mazeController.setDialogText("Playing level");
        levelEditor.resetViewportSize();
      }

    } else {
      menuMs += ms;
      handleMenuControls();
    }

    handleGlobalControls();
    controlState.clearFresh();
  }

  private ListMenu activeList() {
    return lists[activeListIndex];
  }

  public void renderAll(XorSurface xs, Surface s, int ms) {
    boolean isEditorMode = levelEditor.isActive() && !mazeController.isActive();
    XorImage stateIcon = isEditorMode ? levelEditor.stateIcon() : mazeController.stateIcon();
    int stateIconOffset = isEditorMode ? levelEditor.stateIconOffset() : mazeController.stateIconOffset();

    xs.drawSpriteImage(stateIcon, STATE_ICON_X, STATE_ICON_Y + stateIconOffset);
    xs.drawImage(MenuGfx.TITLE, 0, 0);

    if (isEditorMode) {    
      xs.drawImage(MenuGfx.EDITOR_BUTTONS, EDITOR_BUTTONS_X, EDITOR_BUTTONS_Y);
    }

    renderViewport(xs);

    if (mazeController.isActive()) {
      xs.draw(mazeController.renderMap(), MAP_X, MAP_Y);
    } else if (levelEditor.isActive()) {
      xs.draw(levelEditor.renderMap(), MAP_X, MAP_Y);
    }

    if (mazeController.isActive()
        || (mazeController.wasActive() && !levelEditor.isActive())) {
      mazeController.renderMovesCounter(xs);
      mazeController.renderBalloonsCounter(xs);
    }
  }

  private void renderViewport(XorSurface xs) {
    if (intro) return;

    xs.startClipped(VIEWPORT_X, VIEWPORT_Y, VIEWPORT_SIZE_PX, VIEWPORT_SIZE_PX);
    try {
      xs.translate(VIEWPORT_X, VIEWPORT_Y);
      xs.fillRect(0, 0, VIEWPORT_SIZE_PX, VIEWPORT_SIZE_PX, 0xff000000);

      if (mazeController.isActive()) {
        mazeController.render(xs);
      } else if (levelEditor.isActive()) {
        levelEditor.render(xs);
      } else {
        renderMenu(xs);
      }
      xs.translate(-VIEWPORT_X, -VIEWPORT_Y);
    } finally {
      xs.endClipped();
    }
  }

  private void renderMenu(XorSurface xs) {
    if (activeList() != null) {
      activeList().render(xs);
    } else {
      renderMainMenu(xs);
    }
  }

  private void renderMainMenu(XorSurface xs) {
    xs.drawCenteredText(MenuGfx.BROWN_FONT, "Guide the Prospectors", 96, 12);
    xs.drawCenteredText(MenuGfx.BROWN_FONT, "through the", 96, 24);
    xs.drawTextBox(MenuGfx.BROWN_FONT, "Mazes\nof Xor", 8, 40, 84, 40, MenuGfx.BROWN);
    xs.drawTextBox(MenuGfx.BROWN_FONT, "Mazes of\nProcyon", 99, 40, 84, 40, MenuGfx.BROWN);
    xs.drawTextBox(MenuGfx.WHITE_FONT, "<", 2, 52, 15, 15, MenuGfx.BROWN);
    xs.drawTextBox(MenuGfx.WHITE_FONT, ">", 174, 52, 15, 15, MenuGfx.BROWN);

    int tip = Ints.modulo(menuMs / 5000, TIP_SPRITES.length);
    xs.drawSpriteImage(Sprites.CELLS[TIP_SPRITES[tip].code], 8, 96);
    xs.drawTextBox(MenuGfx.BROWN_FONT, TIP_TEXT[tip], 34, 98, 152, 20, 0);

    xs.drawTextBox(MenuGfx.BROWN_FONT, "Load/Save", 8, 134, 84, 20, MenuGfx.BROWN);
    xs.drawTextBox(MenuGfx.BROWN_FONT, "Level\nEditor", 99, 134, 84, 20, MenuGfx.BROWN);

    int credit = Ints.modulo((menuMs - 2500) / 5000, CREDITS_TEXT.length);
    xs.drawTextWithNewLines(MenuGfx.BROWN_FONT, CREDITS_TEXT[credit], 8, 164);
  }

  private static final CellType[] TIP_SPRITES = new CellType[] {
    CellType.HERB, CellType.PIP, CellType.BALLOON, CellType.EXIT, CellType.FIELD_H, CellType.FIELD_V, CellType.MAP_NW,
    CellType.ROCK, CellType.ZEPPELIN, CellType.DYNAMITE, CellType.TIN_BOMB, CellType.SPHERE, CellType.DECOY, CellType.TELEPORT,
  };

  private static final String[] TIP_TEXT = new String[] {
    "Guide HERB using\nthe arrow keys",
    "Switch to PIP by\npressing Enter",
    "Find all BALLOONS\nbefore escaping",
    "Get to the EXIT\nto finish the maze",
    "HORIZONTAL FIELD\nGo along the field",
    "VERTICAL FIELD\nUp or down only",
    "Get a MAP to\nfind your way",
    "ROCKS fall down\nand can be pushed",
    "ZEPPELINS fly left\nDon't get hit!",
    "DYNAMITE falls and\nexplodes when hit",
    "TIN BOMB explodes\ntoo but flies left",
    "Push the SPHERE\nin any direction",
    "DECOY has a nasty\nsurprise. Avoid!",
    "This is a TELEPORT\nBeam me up Scottie!"
  };

  private static final String[] CREDITS_TEXT = new String[] {
    "\nGame concept:\n  Astral Software",
    "\nGraphics:\n  Andreas Voigt",
    "\nAudio:\n  Nirto K Fischer",
    "\nAdvisory:\n  Thorsten Meyer",
    "Amiga programmers:\n  Erik von Hesse\n  Olaf Siemens",
    "\nHTML5 programmer:\n  A Olsen using Playn",
    "     (C) 1989 by\n   Hidden Treasures  \n    and Logotron",
  };

  private class HighscoreCallback implements MazeController.GameOverCallback {
    private final int listIndex;
    private final int mazeIndex;
    HighscoreCallback(int listIndex, int mazeIndex) {
      this.listIndex = listIndex;
      this.mazeIndex = mazeIndex;
    }

    public void onGameOver(int highscore) {
      selectMaze();
      activeList().updateHighscore(highscore);
    }

    public void selectMaze() {
      activeListIndex = listIndex;
      activeList().setSelectedIndex(mazeIndex);
    }
  }
}
