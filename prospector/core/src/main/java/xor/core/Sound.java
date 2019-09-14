package xor.core;

public class Sound implements LoadTracker.Loadable {
  public static final LoadTracker LOAD_TRACKER = new LoadTracker();
  public static final LoadTracker MUSIC_LOAD_TRACKER = new LoadTracker();

  private static final float VOLUME = 0.25f;

  public final playn.core.Sound raw;
  
  public Sound(playn.core.Sound raw) {
    this.raw = raw;
  }
  
  public static Sound load(String name) {
    Sound result = new Sound(Platform.INSTANCE.raw.assets().getSound(name));
    LOAD_TRACKER.add(result);
    result.raw.setVolume(VOLUME);
    return result;
  }
  
  public static Sound loadMusic(String name) {
    Sound result = new Sound(Platform.INSTANCE.raw.assets().getMusic(name));
    MUSIC_LOAD_TRACKER.add(result);
    result.raw.setVolume(VOLUME);
    return result;
  }
  
  public boolean isLoaded() {
    return raw.isLoaded();
  }
  
  public void play() { raw.play(); }
  public void stop() { raw.stop(); }
}