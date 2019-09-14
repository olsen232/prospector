package xor.core;

import static xor.core.PixelConstants.*;
import xor.core.Cells.CellType;
import xor.core.LoadSave.Loaded;

import java.util.List;
import java.io.ByteArrayInputStream;

public class Menu {

  private static final int INTRO_TIMEOUT_MS = 10000;

  private ListMenu leftList;
  private ListMenu rightList;
  private Direction selectedList;
  private ControlState controlState;
  private MazeController mazeController = new MazeController();

  private boolean intro = true;
  private int menuMs = 0;
  private boolean loadSave = false;

  private LevelEditor levelEditor;

  public static Menu INSTANCE;

  public Menu(ControlState controlState, List<Maze> xorMaxes, List<Maze> procyonMazes) {
    this.controlState = controlState;
    this.leftList = new ListMenu("Mazes of Xor", xorMaxes, Direction.RIGHT);
    this.rightList = new ListMenu("Mazes of Procyon", procyonMazes, Direction.LEFT);
    this.levelEditor = new LevelEditor(LevelEditor.defaultEditorMaze(), controlState);
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
            new HighscoreCallback(selectedList, activeList().selectedIndex()));
        mazeController.reset();
      } else if (c.direction.isVertical()) {
        activeList().upOrDown(c.direction);
      }
    }

    if (c != null && c.direction != null && c.direction.isHorizontal()) {
      if (selectedList == null) selectedList = c.direction;
      else if (selectedList == c.direction.opposite()) selectedList = null;
      menuMs = 0;
    }

    if (controlState.isFresh(ExtraControl.BACK) && selectedList != null) {
      selectedList = null;
      menuMs = 0;
    }

    if (selectedList == null) {
      if (controlState.isFreshClickInsideViewport(0, 40, 96, 40)) {
        selectedList = Direction.LEFT;
      } else if (controlState.isFreshClickInsideViewport(96, 40, 96, 40)) {
        selectedList = Direction.RIGHT;
      } else if (controlState.isFreshClickInsideViewport(8, 134, 84, 20)) {
        loadSave = LoadSave.save(leftList, rightList, mazeController, levelEditor.customMazeOrNull());
      } else if (controlState.isFreshClickInsideViewport(99, 134, 84, 20)) {
        levelEditor.setActive(true);
      }
    } else if (activeList().isMazeClicked(controlState)) {
      mazeController = new MazeController(activeList().selected(), controlState,
          new HighscoreCallback(selectedList, activeList().selectedIndex()));
      mazeController.reset();
    } else if (activeList().isBackClicked(controlState)) {
      selectedList = null;
    }
  }

  public void load(String s) {
    loadSave = false;
    Loaded loaded = LoadSave.load(s, leftList, rightList);
    if (loaded == null) {
      return;
    }
    if (loaded.customLevel != null) {
      levelEditor = new LevelEditor(loaded.customLevel, controlState);
      levelEditor.setActive(true);
    }
    if (loaded.replay != null) {
      if (loaded.selectedList != null) {
        selectedList = loaded.selectedList;
        activeList().setSelectedIndex(loaded.mazeIndex);
        mazeController = new MazeController(activeList().selected(), controlState,
            new HighscoreCallback(selectedList, activeList().selectedIndex()));  
      } else {
        mazeController = new MazeController(loaded.customLevel, controlState, null);
      }
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
        Sounds.PARTITURE.play();
      } else {
        Sounds.PARTITURE.stop();
      }
    } else if (controlState.isFreshSoundClick()) {
      Sounds.sounds = !Sounds.sounds;
      if (Sounds.sounds) {
        Sounds.THUMP.play();
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
    if (selectedList == Direction.LEFT) return leftList;
    else if (selectedList == Direction.RIGHT) return rightList;
    return null;
  }

  public void renderAll(Surface surface, int ms) {
    boolean isEditorMode = levelEditor.isActive() && !mazeController.isActive();
    Image stateIcon = isEditorMode ? levelEditor.stateIcon() : mazeController.stateIcon();
    int stateIconOffset = isEditorMode ? levelEditor.stateIconOffset() : mazeController.stateIconOffset();

    surface.draw(stateIcon, STATE_ICON_X, STATE_ICON_Y + stateIconOffset);
    surface.draw(MenuGfx.TITLE, 0, 0);

    if (isEditorMode) {    
      surface.draw(MenuGfx.EDITOR_BUTTONS, EDITOR_BUTTONS_X, EDITOR_BUTTONS_Y);
    }

    renderViewport(surface);

    if (mazeController.isActive()) {
      surface.draw(mazeController.renderMap(), MAP_X, MAP_Y);
    } else if (levelEditor.isActive()) {
      surface.draw(levelEditor.renderMap(), MAP_X, MAP_Y);
    }

    if (mazeController.isActive()
        || (mazeController.wasActive() && !levelEditor.isActive())) {
      mazeController.renderMovesCounter(surface);
      mazeController.renderBalloonsCounter(surface);
    }
  }

  private void renderViewport(Surface surface) {
    if (intro) return;

    surface.startClipped(VIEWPORT_X, VIEWPORT_Y, VIEWPORT_SIZE_PX, VIEWPORT_SIZE_PX);
    try {
      surface.translate(VIEWPORT_X, VIEWPORT_Y);
      surface.fillRect(0, 0, VIEWPORT_SIZE_PX, VIEWPORT_SIZE_PX, 0xff000000);

      if (mazeController.isActive()) {
        mazeController.render(surface);
      } else if (levelEditor.isActive()) {
        levelEditor.render(surface);
      } else {
        renderMenu(surface);
      }
      surface.translate(-VIEWPORT_X, -VIEWPORT_Y);
    } finally {
      surface.endClipped();
    }
  }

  private void renderMenu(Surface surface) {
    if (activeList() != null) {
      activeList().render(surface);
    } else {
      renderMainMenu(surface);
    }
  }

  private void renderMainMenu(Surface surface) {
    Font.BROWN.centeredSingleLine(surface, "Guide the Prospectors", 96, 12);
    Font.BROWN.centeredSingleLine(surface, "through the", 96, 24);
    surface.drawTextBox(Font.BROWN, "Mazes\nof Xor", 8, 40, 84, 40, MenuGfx.BROWN);
    surface.drawTextBox(Font.BROWN, "Mazes of\nProcyon", 99, 40, 84, 40, MenuGfx.BROWN);
    surface.drawTextBox(Font.WHITE, "<", 2, 52, 15, 15, MenuGfx.BROWN);
    surface.drawTextBox(Font.WHITE, ">", 174, 52, 15, 15, MenuGfx.BROWN);

    int tip = Ints.modulo(menuMs / 5000, TIP_SPRITES.length);
    surface.draw(Sprites.CELLS[TIP_SPRITES[tip].code], 8, 96);
    surface.drawTextBox(Font.BROWN, TIP_TEXT[tip], 34, 98, 152, 20, 0);

    surface.drawTextBox(Font.BROWN, "Load/Save", 8, 134, 84, 20, MenuGfx.BROWN);
    surface.drawTextBox(Font.BROWN, "Level\nEditor", 99, 134, 84, 20, MenuGfx.BROWN);

    int credit = Ints.modulo((menuMs - 2500) / 5000, CREDITS_TEXT.length);
    Font.BROWN.leftAligned(surface, CREDITS_TEXT[credit], 8, 164);
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
    private final Direction selectList;
    private final int mazeIndex;
    HighscoreCallback(Direction selectList, int mazeIndex) {
      this.selectList = selectList;
      this.mazeIndex = mazeIndex;
    }

    public void onGameOver(int highscore) {
      selectMaze();
      activeList().updateHighscore(highscore);
    }

    public void selectMaze() {
      selectedList = selectList;
      activeList().setSelectedIndex(mazeIndex);
    }
  }
}
