package xor.core;

import xor.core.Cells.CellType;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

public final class AsciiMazeLoader {
  private AsciiMazeLoader() {}

  private static final Map<Integer, Integer> LOAD_TABLE = new HashMap<Integer, Integer>();
  private static final Map<Integer, String> SAVE_TABLE = new HashMap<Integer, String>();
  static {
    addAsciiCell("  |..|: | :", CellType.EMPTY);
    addAsciiCell("P2|p2|2p|2P", CellType.PIP);
    addAsciiCell("P1|p1|1p|1P", CellType.HERB);
    addAsciiCell("Ro|ro|RO|rO", CellType.ROCK);
    addAsciiCell("Ze|ze|ZE|ze", CellType.ZEPPELIN);
    addAsciiCell("Sp|sp|SP|sp", CellType.SPHERE);
    addAsciiCell("Ba|ba|BA|bA", CellType.BALLOON);
    addAsciiCell("De|de|DE|dE", CellType.DECOY);
    addAsciiCell("Nw|nw|NW|nW", CellType.MAP_NW);
    addAsciiCell("Ne|ne|NE|nE", CellType.MAP_NE);
    addAsciiCell("Sw|sw|SW|sW", CellType.MAP_SW);
    addAsciiCell("Se|se|SE|sE", CellType.MAP_SE);
    addAsciiCell("Te|te|TE|te", CellType.TELEPORT);
    addAsciiCell("Vf|vf|VF|vF", CellType.FIELD_V);
    addAsciiCell("Hf|hf|HF|hF", CellType.FIELD_H);
    addAsciiCell("Tb|tb|TB|tB", CellType.TIN_BOMB);
    addAsciiCell("Dy|dy|DY|dY", CellType.DYNAMITE);
    addAsciiCell("Ex|ex|EX|ex", CellType.EXIT);
    addAsciiCell("[]|{}|{]|[}", CellType.WALL);
  }

  private static final String MAZE_DIVIDER_STRING = "================================================================================";

  public static List<Maze> loadList(String string) {
    String[] lines = string.split("\n");
    List<Maze> result = new ArrayList<Maze>();
    result.add(loadMaze(lines, 0));
    
    String line = "";
 
    for (int l = 0; l < lines.length; l++) {
      line = lines[l];
      if (line.trim().startsWith("====")) {
        result.add(loadMaze(lines, l + 1));
      }
    }
    return result;
  }

  public static Maze loadMaze(String string) {
    return loadMaze(string.split("\n"), 0);
  }

  public static Maze loadMaze(String[] lines, int l) {
    String title = "";
    int width = Maze.STANDARD_GRID_SIZE;
    int height = Maze.STANDARD_GRID_SIZE;
    int wallTheme = 0;
    int floorTheme = 0;

    String line = "";
    
    // Parse header:
    for ( ; l < lines.length; l++) {
      line = lines[l];
      if (line.trim().isEmpty()) continue;
      // Ends header:
      if (looksLikeMazeData(line)) break;

      try {
        String[] pieces = line.split(",", 4);
        if (pieces.length >= 1) width = height = parseInt(pieces[0]);
        if (pieces.length >= 2) height = parseInt(pieces[1]);
        if (pieces.length >= 3) wallTheme = floorTheme = parseInt(pieces[2]) - 1;
        if (pieces.length >= 4) floorTheme = parseInt(pieces[3]) - 1;
      } catch (Exception e) {
        title = line.trim();
      }
    }
    if (l == lines.length) {
      return null;
    }

    // Parse maze:
    Maze maze = new Maze(title, width, height, wallTheme, floorTheme);
    int row = 0;
    for (int y = 0; y < height && l < lines.length; y++) {
      line = lines[l];
      for (int x = 0, i = 0; x < width; x++) {
        try {
          maze.set(x, y, parseCell(safeCharAt(line, i++), safeCharAt(line, i++)));
        } catch (IllegalArgumentException e) {
          throw new IllegalArgumentException(e.getMessage() + "\n at line: \n" + line);
        }
      }
      l++;
    }

    maze.updateAllWalls();
    return maze;
  }

  private static int parseInt(String s) {
    return Integer.parseInt(s.trim());
  }


  public static String saveMaze(Maze maze) {
    String result = "";
    result += maze.title() + "\n";
    result += maze.width + ", " + maze.height + ", " + (maze.wallTheme + 1) + ", " + (maze.floorTheme + 1) + "\n";
    for (int y = 0; y < maze.height; y++) {
      for (int x = 0; x < maze.width; x++) {
        int code = maze.get(x, y);
        code = Cells.encodeCell(Cells.cellType(code), Cells.floorType(code));
        result += SAVE_TABLE.get(code);
      }
      result += "\n";
    }
    result += "\n";
    return result;
  }

  private static int parseCell(char first, char second) {
    Integer result = LOAD_TABLE.get(packAsInt(first, second));
    if (result == null) throw new IllegalArgumentException("Unrecognized cell: " + first + second);
    return result;
  }

  private static boolean isValidCell(char first, char second) {
    return LOAD_TABLE.containsKey(packAsInt(first, second));
  }

  private static int packAsInt(char first, char second) {
    return (first << 16) | second;
  }

  private static int packAsInt(String twoChars) {
    return packAsInt(twoChars.charAt(0), twoChars.charAt(1));
  }

  private static char safeCharAt(String s, int index) {
    if (index >= s.length()) return ' ';
    return s.charAt(index);
  }

  private static boolean looksLikeMazeData(String line) {
    int i;
    for (i = 0; i < line.length(); i += 2) {
      if (safeCharAt(line, i) != ' ' || safeCharAt(line, i + 1) != ' ') break;
    }
    int start = i, stop = Math.min(line.length(), i + 8);
    for (i = start; i < stop; i += 2) {
      if (!isValidCell(safeCharAt(line, i), safeCharAt(line, i + 1))) return false;
    }
    return true;
  }

  private static void addAsciiCell(String asciiCells, CellType cellType) {
    String[] pieces = asciiCells.split("\\|", 4);
    for (int f = 0; f < 4; f++) {
      int code = Cells.encodeCell(cellType, f);
      LOAD_TABLE.put(packAsInt(pieces[f]), code);
      SAVE_TABLE.put(code, pieces[f]);
    }
  }
}

