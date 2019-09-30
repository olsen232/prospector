package xor.core;

import static xor.core.PixelConstants.FONT_SIZE;

import react.Slot;
import java.io.ByteArrayOutputStream;

public class LoadSaveMenu {
  private final Menu mainMenu;
  private final ListMenu left;
  private final ListMenu right;
  private final HighscoresEncoder highscoresEncoder;
  private final ControlState controlState;

  private String state;
  private int maxWidth;
  private int maxHeight;

  private Image image;
  private Image inverse;
  private int inverseMs = 0;

  public LoadSaveMenu(Menu mainMenu, ListMenu left, ListMenu right, HighscoresEncoder highscoresEncoder, ControlState controlState) {
    this.mainMenu = mainMenu;
    this.left = left;
    this.right = right;
    this.highscoresEncoder = highscoresEncoder;
    this.controlState = controlState;
    Clipboard.INSTANCE.addListener(clipboardSlot);
  }

  public void tick(int ms) {
    inverseMs -= ms;
    handleControls();
  }

  public void setState(MazeController mazeController, Maze customLevel) {
    String highscores = highscoresEncoder.encode();
    if (!highscores.isEmpty()) {
      highscores = "Highscores:\n" + highscores + "\n\n";
    }
  
    String replay = "";  
    if (mazeController.movesOut != null && mazeController.movesOut.size() > 0) {
      replay = "Replay:\n" + mazeController.maze().title() + "\n" + limitWidth(mazeController.movesOut.toString(), 80) + "\n";
    }

    String maze = "";
    if (customLevel != null) {
      maze = "Maze:\n" + AsciiMazeLoader.saveMaze(customLevel);
    }

    String state = highscores + replay + maze;
    setState(state);
  }

  private static String limitWidth(String in, int width) {
    if (in.length() <= width) {
      return in + "\n";
    }
    StringBuilder result = new StringBuilder();
    for (int begin = 0; begin < in.length(); ) {
      int end = Math.min(begin + width, in.length());
      result.append(in.substring(begin, end)).append('\n');
      begin = end;
    }
    return result.toString();
  }

  public void setState(String state) {
    this.state = state;
    Clipboard.INSTANCE.setSnippet(state, false);
    updateTextSize();
    updateImages();
  }

  private void updateImages() {
    image = renderText(maxWidth, maxHeight, state, false);
    inverse = renderText(maxWidth, maxHeight, state, true);
  }

  private void updateTextSize() {
    maxHeight = 1;
    maxWidth = 1;
    int width = 1;
    for (int i = 0; i < state.length(); i++) {
      if (state.charAt(i) == '\n') {
        maxHeight += 1;
        width = 1;
      } else {
        width += 1;
        maxWidth = Math.max(maxWidth, width);
      }
    }
  }

  private static Image renderText(int maxWidth, int maxHeight, String text, boolean inverse) {
    Canvas result = Platform.INSTANCE.createCanvas(maxWidth * FONT_SIZE, maxHeight * FONT_SIZE);
    Font font = inverse ? Font.BLACK : Font.BROWN;
    result.fillRect(0, 0, result.image.width(), result.image.height(), inverse ? MenuGfx.BROWN : MenuGfx.BLACK); 
    font.leftAligned(result, text, 0, 0);
    return result.snapshot();
  }

  public void handleControls() {
    if (controlState.isFreshClickInsideViewport(8, 140, 84, 20)) {
      Clipboard.INSTANCE.writeSnippetToSystem();
    } else if (controlState.isFreshClickInsideViewport(99, 140, 84, 20) && Clipboard.INSTANCE.canReadFromSystem()) {
      Clipboard.INSTANCE.readSnippetFromSystem();
    } else if (controlState.isFreshClickInsideViewport(8, 166, 84, 20)) {
      mainMenu.load(null);
    } else if (controlState.isFreshClickInsideViewport(99, 166, 84, 20)) {
      mainMenu.load(loadState());
    }
  }

  private Loaded loadState() {
    if (state == null || state.isEmpty()) {
      return null;
    }
    String[] parts = state.split("\n");

    String levelName = "";
    String lastLevelName = "";
    String replay = "";
    String lastReplay = "";
    for (int i = 0; i < parts.length; i++) {
      parts[i] = parts[i].trim();
       
      if (!parts[i].isEmpty() && highscoresEncoder.decodeAndUpdate(parts[i])) {
        continue;
      }

      if (!parts[i].isEmpty() && looksLikeReplay(parts[i])) {
        lastReplay += makeReplay(parts[i]);
        levelName = lastLevelName;
        replay = lastReplay;
      } else if (!parts[i].isEmpty()) {
        lastLevelName = parts[i];
        lastReplay = "";
      }
    }

    Maze customLevel = AsciiMazeLoader.loadMaze(parts, 0);

    Loaded loaded = new Loaded();
    loaded.customLevel = customLevel;

    ByteArrayOutputStream baos = null;
    if (replay.length() > 0) {
      baos = new ByteArrayOutputStream();
      baos.write(replay.getBytes(), 0, replay.length());
    }
    if (customLevel != null && customLevel.title().equals(levelName)) {
      loaded.selectedList = null;
      loaded.mazeIndex = -1;
      loaded.replay = baos;
    }

    for (int i = 0; i < 15; i++) {
      if (left.entries[i].maze.title().equals(levelName)) {
        loaded.selectedList = Direction.LEFT;
        loaded.mazeIndex = i;
        loaded.replay = baos;
      } else if (right.entries[i].maze.title().equals(levelName)) {
        loaded.selectedList = Direction.RIGHT;
        loaded.mazeIndex = i;
        loaded.replay = baos;
      }
    }

    return loaded;
  }

  public static final String REPLAY_CHARS = "ULDRXuldrx";

  public static boolean looksLikeReplay(String s) {
    for (int i = 0; i < Math.min(10, s.length()); i++) {
      if (REPLAY_CHARS.indexOf(s.charAt(i)) == -1) {
        return false;
      }
    }
    return true;
  }

  public static String makeReplay(String s) {
    StringBuilder result = new StringBuilder();
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      if (REPLAY_CHARS.indexOf(c) != -1) result.append(c);
    }
    return result.toString();
  }

  public void render(Surface surface) {
    Font.YELLOW.centeredSingleLine(surface, "- Current State -", 96, 12);
    Font.BROWN.centeredSingleLine(surface, "Copy  save  Paste  load", 96, 24);
    Font.BROWN.centeredSingleLine(surface,      "&            &", 96, 24);

    Font.BROWN.drawTextBox(surface, "Copy", 8, 140, 84, 20, MenuGfx.BROWN);
    if (Clipboard.INSTANCE.canReadFromSystem()) {
      Font.BROWN.drawTextBox(surface, "Paste", 99, 140, 84, 20, MenuGfx.BROWN);
    } else {
      Font.BROWN.drawTextBox(surface, "Ctrl+V\nto Paste", 99, 140, 84, 20, MenuGfx.BLACK);
    }
    Font.BROWN.drawTextBox(surface, "Back", 8, 166, 84, 20, MenuGfx.BROWN);
    Font.BROWN.drawTextBox(surface, "Load state", 99, 166, 84, 20, MenuGfx.BROWN);
    if (image != null) {
      drawScaledImage(surface, (inverseMs > 0) ? image : inverse, 0, 30, 192, 108);
    }
  }

  private static void drawScaledImage(Surface surface, Image image, int x, int y, int w, int h) {
    float xScale = 1.0f * w / image.width();
    float yScale = 1.0f * h / image.height();
    float scale = Math.min(xScale, yScale);
    scale = Math.min(scale, 1);
    surface.draw(image, x, y, image.width() * scale, image.height() * scale);
  }

  private Slot<String> clipboardSlot = new Slot<String>() {
    @Override
    public void onEmit(String text) {
      if (!text.equals(state)) {
        setState(text);
      }
      inverseMs = 100;
    }
  };

  public static class Loaded {
    public Direction selectedList;
    public int mazeIndex;
    public Maze customLevel;
    public ByteArrayOutputStream replay;
  }
}
