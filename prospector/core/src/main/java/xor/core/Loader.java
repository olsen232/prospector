package xor.core;

import playn.core.Sound;

import java.util.HashMap;
import java.util.Map;

public final class Loader {
  private Loader() {}
  
  private static Map<String, playn.core.Image> IMAGES = new HashMap<>();
  private static Map<String, Sound> SOUNDS = new HashMap<>();
  private static Map<String, Sound> MUSICS = new HashMap<>();
  
  /*public static Image loadImage(String name) {
    Image image = IMAGES.get(name);
    if (image == null) {
      image = new Image(Platform.INSTANCE.raw.assets().getImage(name));
      IMAGES.put(name, image);
    }
    return image;
  }*/
  
  public static Sound loadSound(String name) {
    Sound sound = SOUNDS.get(name);
    if (sound == null) {
      sound = Platform.INSTANCE.raw.assets().getSound(name);
      SOUNDS.put(name, sound);
    }
    return sound;
  }
  
  public static Sound loadMusic(String name) {
    Sound music = MUSICS.get(name);
    if (music == null) {
      music = Platform.INSTANCE.raw.assets().getMusic(name);
      MUSICS.put(name, music);
    }
    return music;
  }
  
  public static String imageText() {
    int loaded = 0, total = 0;
    for (playn.core.Image image : IMAGES.values()) {
      loaded += image.isLoaded() ? 1 : 0;
      total += 1;
    }
    return "Images: " + loaded + " of " + total;
  }
  
    
  public static String soundText() {
    int loaded = 0, total = 0;
    for (Sound sound : SOUNDS.values()) {
      loaded += sound.isLoaded() ? 1 : 0;
      total += 1;
    }
    return "Sounds: " + loaded + " of " + total;
  }
  
  public static String musicText() {
    int loaded = 0, total = 0;
    for (Sound music : MUSICS.values()) {
      loaded += music.isLoaded() ? 1 : 0;
      total += 1;
    }
    return "Music: " + loaded + " of " + total;
  }
  
  public static String statusText() {
    return imageText() + "\n\n" + soundText() + "\n\n" + musicText();
  }
  
  public static boolean isFinished() {
    if (IMAGES.size() == 0) {
      return false;
    }
    for (playn.core.Image image : IMAGES.values()) {
      if (!image.isLoaded()) {
        return false;
      }
    }
    for (Sound sound : SOUNDS.values()) {
      if (!sound.isLoaded()) {
        return false;
      }
    }
    return true;
  }
}