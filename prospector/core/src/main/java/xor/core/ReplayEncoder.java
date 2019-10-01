package xor.core;

import java.io.ByteArrayOutputStream;

public final class ReplayEncoder {
  private ReplayEncoder() {}

  public static final String REPLAY_CHARS = "ULDRXuldrx";

  public static String encode(MazeController mazeController) {
    if (mazeController == null || mazeController.movesOut == null || mazeController.movesOut.size() == 0) {
      return "";
    }
    return mazeController.maze().title() + "\n" + encodeMoves(mazeController.movesOut);
  }

  public static Replay decode(String[] lines) {
    String title = null;
    String potentialTitle = null;
    ByteArrayOutputStream moves = new ByteArrayOutputStream();

    for (String line : lines) {
      if (line.isEmpty()) continue;

      if (looksLikeReplay(line)) {
        if (potentialTitle != null) {
          title = potentialTitle;
          potentialTitle = null;
          moves.reset();
        }
        decodeMoves(line, moves);
      } else {
        potentialTitle = line;
      }
    }

    if (title != null && moves.size() > 0) {
      return new Replay(title, moves);
    }
    return Replay.EMPTY;
  }

  private static boolean looksLikeReplay(String s) {
    for (int i = 0; i < Math.min(10, s.length()); i++) {
      if (REPLAY_CHARS.indexOf(s.charAt(i)) == -1) {
        return false;
      }
    }
    return true;
  }

  private static void decodeMoves(String str, ByteArrayOutputStream result) {
    for (int i = 0; i < str.length(); i++) {
      char c = str.charAt(i);
      if (REPLAY_CHARS.indexOf(c) != -1) result.write(c);
    }
  }

  public static String encodeMoves(ByteArrayOutputStream moves) {
    return limitWidth(moves.toString(), 80);
  }

  public static String limitWidth(String in, int width) {
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

  public static class Replay {
    public static final Replay EMPTY = new Replay(null, null);

    Replay(String title, ByteArrayOutputStream moves) {
      this.title = title;
      this.moves = moves;
    }

    public final String title;
    public final ByteArrayOutputStream moves;
  }
}
