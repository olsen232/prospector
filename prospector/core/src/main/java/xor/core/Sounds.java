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

  public static final Sound[] STATE_SOUNDS = new Sound[MazeState.NUM_STATES];
  public static final Sound[] EVENT_SOUNDS = new Sound[MazeState.NUM_ADDITIONAL_EVENTS];

  public static boolean sounds = true;
  public static boolean music = true;
  
  public static Sound EXPLOSION, TELEPORT, DYING, CONGRATULATIONS, BALLOON, MAP, THUMP;
  public static Sound PARTITURE;

  public static void startLoading() {
    EXPLOSION = Loader.loadSound("explosion");
    TELEPORT = Loader.loadSound("explosion");
    DYING = Loader.loadSound("explosion");
    CONGRATULATIONS = Loader.loadSound("explosion");
    BALLOON = Loader.loadSound("explosion");
    MAP = Loader.loadSound("map");
    THUMP = Loader.loadSound("thump");
    
    PARTITURE = Loader.loadMusic("partiture");
  }

  public static boolean isMusicLoaded() {
    return PARTITURE.isLoaded();
  }

  public static void finishLoading() {
    addSound(State.EXPLOSION, EXPLOSION);
    addSound(State.THROUGH_TELEPORT, TELEPORT);
    addSound(State.STUCK_IN_TELEPORT, TELEPORT);
    addSound(State.PLAYER_DYING, DYING);
    addSound(State.LEVEL_COMPLETED, CONGRATULATIONS);

    addSound(AdditionalEvent.BALLOON_COLLECTED, BALLOON);
    addSound(AdditionalEvent.MAP_COLLECTED, MAP);
    addSound(AdditionalEvent.OBJECT_STOPPED, THUMP);

    Loader.setSoundVolume(0.25f);
    Loader.setMusicVolume(0.25f);
  }

  private static void addSound(State state, Sound sound) {
    STATE_SOUNDS[state.code] = sound;
  }

  private static void addSound(AdditionalEvent event, Sound sound) {
    EVENT_SOUNDS[event.code] = sound;
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
