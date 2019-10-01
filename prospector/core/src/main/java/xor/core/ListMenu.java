package xor.core;

import static xor.core.PixelConstants.*;

import java.util.List;

public class ListMenu {
  public static final int NUM_LEVELS_PER_SCREEN = 15;
  public static final int START_X = 4;
  public static final int START_Y = 6;
  public static final int LINE_SPACE = 3;
  public static final int FIXED_TITLE_LENGTH = 19;
  public static final int FIXED_HIGHSCORE_LENGTH = 4;

  private static final String SPACES = "                              ";

  public final String listTitle;
  public final ListEntry[] entries;
  public final Direction back;

  private int selectedIndex = 0;
  private int startIndex = 0;

  public ListMenu(String listTitle, List<Maze> mazes, Direction back) {
    this(listTitle, toListEntries(mazes), back);
  }

  public ListMenu(String listTitle, ListEntry[] entries, Direction back) {
    this.listTitle = listTitle;
    this.entries = entries;
    this.back = back;
  }

  public void render(Surface surface) {
    for (int i = 0; i < NUM_LEVELS_PER_SCREEN; i++) {
      int entryIndex = i + startIndex;
      Font font = (entryIndex == selectedIndex) ? Font.WHITE : Font.YELLOW;
      font.singleLine(surface, entries[entryIndex].rowText, START_X, START_Y + i * (FONT_SIZE + LINE_SPACE));
    }
    Font.BROWN.drawTextBox(surface, listTitle, FOOTER_X, FOOTER_Y, FOOTER_WIDTH, FOOTER_HEIGHT, MenuGfx.BROWN);
    if (back == Direction.LEFT) {
      Font.BROWN.drawTextBox(surface, "<", 2, FOOTER_Y, 16, FOOTER_HEIGHT, MenuGfx.BROWN);
    } else if (back == Direction.RIGHT) {
      Font.BROWN.drawTextBox(surface, ">", 172, FOOTER_Y, 16, FOOTER_HEIGHT, MenuGfx.BROWN);
    }
  }

  public void upOrDown(Direction d) {
    selectedIndex = d.dy(selectedIndex);
    selectedIndex = Ints.modulo(selectedIndex, entries.length);
    if (selectedIndex < startIndex) {
      startIndex = selectedIndex;
    } else if (selectedIndex >= startIndex + NUM_LEVELS_PER_SCREEN) {
      startIndex = selectedIndex - NUM_LEVELS_PER_SCREEN + 1;
    }
  }

  public boolean isMazeClicked(ControlState controlState) {
    if (controlState.peekFreshMouseClick()) {
      for (int i = 0; i < NUM_LEVELS_PER_SCREEN; i++) {
        if (controlState.isFreshClickInsideViewport(0, START_Y + i * (FONT_SIZE + LINE_SPACE), VIEWPORT_SIZE_PX, FONT_SIZE)) {
          selectedIndex = i;
          return true;
        }
      }
    }
    return false;
  }

  public boolean isBackClicked(ControlState controlState) {
    if (back == Direction.LEFT) {
      return controlState.isFreshClickInsideViewport(2, FOOTER_Y, 16, FOOTER_HEIGHT);
    } else if (back == Direction.RIGHT) {
      return controlState.isFreshClickInsideViewport(172, FOOTER_Y, 16, FOOTER_HEIGHT);
    }
    return false;
  }

  public void setSelectedIndex(int selectedIndex) {
    this.selectedIndex = Ints.clamp(selectedIndex, 0, entries.length);
  }

  public int selectedIndex() {
    return selectedIndex;
  }

  public Maze selected() {
    return entries[selectedIndex].maze;
  }

  public boolean selectMazeByTitle(String title) {
    for (int i = 0; i < NUM_LEVELS_PER_SCREEN; i++) {
      if (entries[i].maze.title().equals(title)) {
        this.selectedIndex = i;
        return true;
      }
    }
    return false;
  }

  public void updateHighscore(int highscore) {
    updateHighscore(selectedIndex, highscore);
  }

  public void updateHighscore(int index, int highscore) {
    highscore = Math.min(highscore, entries[index].highscore);
    if (highscore != entries[index].highscore) {
      entries[index] = new ListEntry(entries[index].maze, highscore);
    }
  }

  public static String fixedLength(String s, int fixedLength) {
    if (s == null) s = "";
    if (s.length() <= fixedLength) {
      return s + SPACES.substring(0, fixedLength - s.length());
    } else {
      return s.substring(0, fixedLength);
    }
  }

  public static class ListEntry {
    public final Maze maze;
    public final String fixedLengthTitle;
    public final int highscore;
    public final String rowText;

    public ListEntry(Maze maze, int highscore) {
      this.maze = maze;
      this.fixedLengthTitle = fixedLength(maze.title(), FIXED_TITLE_LENGTH);
      this.highscore = highscore;
      int highscoreLen = ("" + highscore).length();
      this.rowText = fixedLengthTitle + SPACES.substring(0, FIXED_HIGHSCORE_LENGTH - highscoreLen) + highscore;
    }
  }

  static ListEntry[] toListEntries(List<Maze> mazes) {
    ListEntry[] result = new ListEntry[mazes.size()];
    int index = 0;
    for (Maze m : mazes) {
      result[index++] = new ListEntry(m, 9999);
    }
    return result;
  }

  static ListEntry[] toListEntries(Maze[] mazes) {
    ListEntry[] result = new ListEntry[mazes.length];
    int index = 0;
    for (Maze m : mazes) {
      result[index++] = new ListEntry(m, 9999);
    }
    return result;
  }
}
