package xor.core;

import xor.core.MazeState.AdditionalEvent;
import xor.core.MazeState.MazeStateListener;
import xor.core.MazeState.State;

import java.util.Map;
import java.util.HashMap;
import playn.core.Platform;
import playn.core.Sound;

public final class Sounds {
  private Sounds() {}

  private static final Map<String, Sound> map = new HashMap<String, Sound>();

  public static final Sound[] STATE_SOUNDS = new Sound[MazeState.NUM_STATES];
  public static final Sound[] EVENT_SOUNDS = new Sound[MazeState.NUM_ADDITIONAL_EVENTS];

  public static boolean sounds = true;
  public static boolean music = true;

  private static Platform plat;

  public static void start(Platform plat) {
    Sounds.plat = plat;
    start("explosion");
    start("teleport");
    start("dying");
    start("congratulations");
    start("balloon");
    start("map");
    start("thump");

    map.put("partiture", plat.assets().getMusic("partiture"));
  }

  private static void start(String filename) {
    map.put(filename, plat.assets().getSound(filename));
  }

  public static boolean isLoaded() {
    Sound music = map.get("partiture");
    for (Sound sound : map.values()) {
      if (sound == music) continue;
      if (!sound.isLoaded()) {
        return false;
      }
    }
    return true;
  }

  public static boolean isMusicLoaded() {
    return map.get("partiture").isLoaded();
  }

  public static String soundsLoadedDesc() {
    int loaded = -1, total = -1;
    Sound music = map.get("partiture");
    for (playn.core.Sound sound : map.values()) {
      if (sound == music) continue;
      loaded += sound.isLoaded() ? 1 : 0;
      total += 1;
    }
    return "Sounds: " + loaded + " of " + total;
  }

  public static String musicLoadedDesc() {
    Sound music = map.get("partiture");
    int loaded = music.isLoaded() ? 1 : 0;
    int total = 1;
    return "Music: " + loaded + " of " + total;
  }

  public static void load() {
    addSound(State.EXPLOSION, "explosion");
    addSound(State.THROUGH_TELEPORT, "teleport");
    addSound(State.PLAYER_DYING, "dying");
    addSound(State.LEVEL_COMPLETED, "congratulations");
    STATE_SOUNDS[State.STUCK_IN_TELEPORT.code] = STATE_SOUNDS[State.THROUGH_TELEPORT.code];

    addSound(AdditionalEvent.BALLOON_COLLECTED, "balloon");
    addSound(AdditionalEvent.MAP_COLLECTED, "map");
    addSound(AdditionalEvent.OBJECT_STOPPED, "thump");

    for (Sound sound : map.values()) {
      sound.setVolume(0.25f);
    }
  }

  private static void addSound(State state, String filename) {
    STATE_SOUNDS[state.code] = get(filename);
  }

  private static void addSound(AdditionalEvent event, String filename) {
    EVENT_SOUNDS[event.code] = get(filename);
  }

  public static Sound get(String filename) {
    return map.get(filename);
  }

  public static final MazeStateListener SOUND_EFFECTS_PLAYER = new MazeStateListener() {
    @Override
    public void onStateTransition(State oldState, State newState, AdditionalEvent event) {
      Sound sound = STATE_SOUNDS[newState.code];
      if (sound == null) {
        sound = EVENT_SOUNDS[event.code];
      }
      if (sound != null && sounds) {
        sound.play();
      }
    }
  };
}
