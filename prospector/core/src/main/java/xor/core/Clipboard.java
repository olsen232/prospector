package xor.core;

import react.Slot;

import java.util.ArrayList;
import java.util.List;

public class Clipboard {
  public static Clipboard INSTANCE;

  public final List<Slot<String>> listeners = new ArrayList<>();
  public String snippet;

  public Clipboard() {
    INSTANCE = this;
  }

  public void setSnippet(String snippet, boolean notifyListeners) {
    this.snippet = snippet;
    if (notifyListeners) {
      notifyListeners();
    }
  }

  public String getSnippet() {
    return snippet;
  }

  public static void onSystemCopyEvent() {
    Clipboard.INSTANCE.writeSnippetToSystem();
  }

  public void writeSnippetToSystem() {
    writeToSystem(snippet);
    notifyListeners();
  }  

  public void writeToSystem(String text) {
    System.out.println(text);
  }

  public boolean canWriteToSystem() {
    return false;
  }

  public void readSnippetFromSystem() {
    setSnippet(readFromSystem(), true);
  }

  public static void onSystemPasteEvent(String pasted) {
    Clipboard.INSTANCE.setSnippet(pasted, true);
  }

  public String readFromSystem() {
    throw new UnsupportedOperationException();
  }

  public boolean canReadFromSystem() {
    return false;
  }

  public void addListener(Slot<String> listener) {
    listeners.add(listener);
  }

  public void notifyListeners() {
    for (Slot<String> listener : listeners) {
      listener.onEmit(snippet);
    }
  }
}


