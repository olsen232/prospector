package xor.core;

import java.util.Arrays;

public final class Codes {
  private Codes() {}

  public static final int NONE = Integer.MIN_VALUE;

  public interface Coded {
    int code();
  }

  public static <T extends Coded> T[] createLookupTable(T[] input, T[] output, T defaultValue) {
    Arrays.fill(output, defaultValue);
    for (T inputValue : input) {
      int code = inputValue.code();
      if (code >= 0 && code < output.length) {
        output[code] = inputValue;
      }
    }
    return output;
  }
}
