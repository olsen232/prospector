package xor.core;

import react.RFuture;
import java.util.List;

public class Mazes {

  public static RFuture<String> XOR_MAZES_FUTURE;
  public static RFuture<String> PROCYON_MAZES_FUTURE;

  public static List<Maze> XOR_MAZES;
  public static List<Maze> PROCYON_MAZES;

  public static void startLoading() {
    XOR_MAZES_FUTURE = Platform.INSTANCE.raw.assets().getText("standard.mazes.txt");
    PROCYON_MAZES_FUTURE = Platform.INSTANCE.raw.assets().getText("standard2.mazes.txt");
  }

  public static boolean isLoaded() {
    return XOR_MAZES_FUTURE.isCompleteNow() && PROCYON_MAZES_FUTURE.isCompleteNow();
  }

  public static void finishLoading() {
    XOR_MAZES = AsciiMazeLoader.loadList(XOR_MAZES_FUTURE.result().get());
    PROCYON_MAZES = AsciiMazeLoader.loadList(PROCYON_MAZES_FUTURE.result().get());
  }
}
