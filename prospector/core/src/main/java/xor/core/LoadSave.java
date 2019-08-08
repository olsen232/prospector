package xor.core;

import java.io.ByteArrayOutputStream;

public final class LoadSave {

  public interface AsciiPrompt {
    void prompt(String output);
  }

  public static AsciiPrompt asciiPrompt;

  public static boolean save(ListMenu left, ListMenu right, MazeController mazeController, Maze customLevel) {
    String highscores = HighscoresEncoder.encode(left, right);
    if (!highscores.isEmpty()) {
      highscores = "Highscores:\n" + highscores + "\n\n";
    }
  
    String replay = "";  
    if (mazeController.movesOut != null && mazeController.movesOut.size() > 0) {
      replay = "Replay:\n" + mazeController.maze().title() + "\n" + mazeController.movesOut.toString() + "\n\n";
    }

    String maze = "";
    if (customLevel != null) {
      maze = "Maze:\n" + AsciiMazeLoader.saveMaze(customLevel);
    }

    String output = highscores + replay + maze;
    if (asciiPrompt != null) {
      asciiPrompt.prompt(output);
      return true;
    } else {
      System.out.println(output);
      return false;
    }
  }

  public static Loaded load(String input, ListMenu left, ListMenu right) {
    if (input == null || input.isEmpty()) {
      return null;
    }
    String[] parts = input.split("\n");

    int[] highscores = HighscoresEncoder.highscores;
    String levelName = "";
    String lastLevelName = "";
    String replay = "";
    String lastReplay = "";
    for (int i = 0; i < parts.length; i++) {
      parts[i] = parts[i].trim();
       
      if (!parts[i].isEmpty() && HighscoresEncoder.decode(parts[i], highscores)) {
        for (int j = 0; j < 15; j++) {
          left.updateHighscore(j, highscores[j]);
          right.updateHighscore(j, highscores[j + 15]);
        }
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
      loaded.selectedList = -1;
      loaded.selectedIndex = -1;
      loaded.replay = baos;
    }

    for (int i = 0; i < 15; i++) {
      if (left.entries[i].maze.title().equals(levelName)) {
        loaded.selectedList = 0;
        loaded.selectedIndex = i;
        loaded.replay = baos;
      } else if (right.entries[i].maze.title().equals(levelName)) {
        loaded.selectedList = 2;
        loaded.selectedIndex = i;
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

  public static class Loaded {
    public int selectedList;
    public int selectedIndex;
    public Maze customLevel;
    public ByteArrayOutputStream replay;
  }
}


