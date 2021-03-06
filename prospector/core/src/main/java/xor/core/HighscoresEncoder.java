package xor.core;

import java.util.Arrays;

public class HighscoresEncoder {

  private static int START_CHECKSUM = 4567;

  private final ListMenu left;
  private final ListMenu right;
  private int[] highscores = new int[30];

  public HighscoresEncoder(ListMenu left, ListMenu right) {
    this.left = left;
    this.right = right;
  }

  public String encode() {
    for (int i = 0; i < 15; i++) {
      highscores[i] = left.entries[i].highscore;
      highscores[i + 15] = right.entries[i].highscore;
    }
    return encode(highscores);
  }

  public boolean decodeAndUpdate(String[] lines) {
    boolean success = false;
    for (String line : lines) {
      if (line.isEmpty()) continue;
      success |= decodeAndUpdate(line);
    }
    return success;
  }

  public boolean decodeAndUpdate(String encoded) {
    if (decode(encoded)) {
      for (int i = 0; i < 15; i++) {
        left.updateHighscore(i, highscores[i]);
        right.updateHighscore(i, highscores[i + 15]);
      }
      return true;
    }
    return false;
  }

  public static String encode(int[] highscores) {
    int zeroes = 0;
    int checkSum = START_CHECKSUM;
    StringBuilder result = new StringBuilder();
    for (int highscore : highscores) {
      highscore = Ints.clamp(highscore, 0, 9999);

      if (highscore > 0 && highscore < 9999) {
        if (zeroes > 0) {
          if (zeroes > 15) {
            result.append(encodeRunOfZeroes(15)); zeroes -= 15;
            checkSum ^= 15;
          }
          result.append(encodeRunOfZeroes(zeroes));
          checkSum ^= zeroes;
          zeroes = 0;
        }

        result.append(encodeHighscore(highscore));
        checkSum ^= highscore;
      } else {
        zeroes++;
      }
    }
    if (result.length() != 0) {
      result.append(encodeHighscore(checkSum));
    }
    return result.toString();
  }

  private static String encodeRunOfZeroes(int zeroes) {
    return "" + asChar(zeroes);
  }

  private static String encodeHighscore(int highscore) {
    if (highscore < 2048) {
      return "" + asChar((highscore & 0xfc0) >> 6 | 0x20) + asChar(highscore & 0x3f);
    } else {
      return "" + asChar((highscore & 0xf000) >> 12 | 0x10) + asChar((highscore & 0xfc0) >> 6) + asChar(highscore & 0x3f);
    }
  }

  private boolean decode(String encoded) {
    try {
      decodeOrThrow(encoded);
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  private void decodeOrThrow(String encoded) {
    if (encoded.length() > 100) throw new IllegalArgumentException("Too long");

    Arrays.fill(highscores, 9999);

    int out = 0;
    int checkSum = START_CHECKSUM;
    int h;
    for (int i = 0; i < encoded.length(); ) {
      int x = decodeChar(encoded, i++);
      if (x <= 15) {
        out += x;
        checkSum ^= x;
      } else {
        if ((x & 0x20) != 0) {
          h = (x & ~0x20) << 6 | decodeChar(encoded, i++);
        } else {
          h = ((x & ~0x30) << 12) | (decodeChar(encoded, i++) << 6) | decodeChar(encoded, i++);
        }
        if (h == checkSum && i == encoded.length()) {
          return;
        } else if (out < highscores.length) {
          highscores[out++] = Ints.clamp(h, 0, 9999);
          checkSum ^= h;
        }
      }
    }
    throw new IllegalArgumentException("Checksum failed");
  }

  private static int decodeChar(String s, int index) {
    return asInt(s.charAt(index));
  }

  private static int asInt(char c) {
    if (c >= 'A' && c <= 'Z') {
      return (int) (c - 'A');
    } else if (c >= 'a' && c <= 'z') {
      return (int) (c - 'a' + 26);
    } else if (c >= '0' && c <= '9') {
      return (int) (c - '0' + 52);
    } else if (c == '+') {
      return 62;
    } else if (c == '/') {
      return 63;
    }
    throw new IllegalArgumentException("Invalid char: " + c);
  }

  private static char asChar(int i) {
    if (i >= 0) {
      if (i < 26) {
        return (char) (i + 'A');
      } else if (i < 52) {
        return (char) (i - 26 + 'a');
      } else if (i < 62) {
        return (char) (i - 52 + '0');
      } else if (i == 62) {
        return '+';
      } else if (i == 63) {
        return '/';
      }
    }
    throw new IllegalArgumentException("Invalid int: " + i);
  }
}
