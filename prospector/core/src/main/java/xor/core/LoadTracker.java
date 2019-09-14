package xor.core;

import java.util.ArrayList;

public class LoadTracker extends ArrayList<LoadTracker.Loadable> {

  public boolean isLoaded() {
    if (this.isEmpty()) return false;
    for (Loadable loadable : this) {
      if (!loadable.isLoaded()) return false;
    }
    return true;
  }
  
  public int loadedCount() {
    int count = 0;
    for (Loadable loadable : this) {
      if (loadable.isLoaded()) count += 1;
    }
    return count;
  }
  
  public String text() {
    return loadedCount() + " of " + this.size();
  }
  
  public static interface Loadable {
    public boolean isLoaded();
  }
}