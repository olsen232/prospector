package xor.core;

import playn.core.Platform;
import react.RFuture;

public class Mazes {

  public static RFuture<String> XOR_MAZES_FUTURE;
  public static RFuture<String> PROCYON_MAZES_FUTURE;

  public static String XOR_MAZES;
  public static String PROCYON_MAZES;

  public static void start(Platform plat) {
    XOR_MAZES_FUTURE = plat.assets().getText("standard.mazes.txt");
    PROCYON_MAZES_FUTURE = plat.assets().getText("standard2.mazes.txt");
  }

  public static boolean isLoaded() {
    return XOR_MAZES_FUTURE.isCompleteNow() && PROCYON_MAZES_FUTURE.isCompleteNow();
  }

  public static void load() {
    XOR_MAZES = XOR_MAZES_FUTURE.result().get();
    PROCYON_MAZES = PROCYON_MAZES_FUTURE.result().get();
  }
}
