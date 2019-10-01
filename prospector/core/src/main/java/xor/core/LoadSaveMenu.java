package xor.core;

import static xor.core.PixelConstants.FONT_SIZE;

import react.Slot;
import java.io.ByteArrayOutputStream;

public class LoadSaveMenu {
  private final Menu mainMenu;
  private final HighscoresEncoder highscoresEncoder;
  private final ControlState controlState;

  private String state;
  private int maxWidth;
  private int maxHeight;

  private Image image;
  private Image inverse;
  private int inverseMs = 0;

  public LoadSaveMenu(Menu mainMenu, HighscoresEncoder highscoresEncoder, ControlState controlState) {
    this.mainMenu = mainMenu;
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
  
    String replay = ReplayEncoder.encode(mazeController); 
    if (!replay.isEmpty()) {
      replay = "Replay:\n" + replay + "\n\n";
    }

    String maze = "";
    if (customLevel != null) {
      maze = "Maze:\n" + AsciiMazeLoader.saveMaze(customLevel);
    }

    String state = highscores + replay + maze;
    setState(state);
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

    String[] lines = state.split("\n");
    for (int i = 0; i < lines.length; i++) {
      lines[i] = lines[i].trim();
    }
 
    highscoresEncoder.decodeAndUpdate(lines);
    ReplayEncoder.Replay replay = ReplayEncoder.decode(lines);
    Maze customLevel = AsciiMazeLoader.loadMaze(lines);

    return new Loaded(replay.title, replay.moves, customLevel);
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
    Loaded(String replayTitle, ByteArrayOutputStream replayMoves, Maze customLevel) {
      this.replayTitle = replayTitle;
      this.replayMoves = replayMoves;
      this.customLevel = customLevel;
    }

    public final String replayTitle;
    public final ByteArrayOutputStream replayMoves;
    public final Maze customLevel;
  }
}
