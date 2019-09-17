package xor.core;

public final class PixelConstants {
  private PixelConstants() {}

  public static final int SCREEN_WIDTH = 320;
  public static final int SCREEN_HEIGHT = 224;

  public static final int TILE_SIZE = 24;

  public static final int VIEWPORT_SIZE_TILES = 8;
  public static final int VIEWPORT_SIZE_PX = TILE_SIZE * VIEWPORT_SIZE_TILES;
  public static final int VIEWPORT_X = 16;
  public static final int VIEWPORT_Y = 16;
  public static final int PALETTE_X = VIEWPORT_X + 5 * TILE_SIZE;

  public static final int MAP_SIZE = 64;
  public static final int MAP_X = 240;
  public static final int MAP_Y = 12;

  public static final int FONT_SIZE = 8;

  public static final int DIAL_WIDTH = 21;
  public static final int DIAL_HEIGHT = 38;
  public static final int DIGIT_WIDTH = 9;
  public static final int DIGIT_HEIGHT = 15;
  public static final int GEAR_WIDTH = 4;
  public static final int GEAR_HEIGHT = DIAL_HEIGHT;

  public static final int MOVES_DIAL_X = 228;
  public static final int MOVES_DIAL_Y = 88;
  public static final int MOVES_DIAL_WIDTH = DIAL_WIDTH * 4;
  public static final int BALLOONS_DIAL_X = 269;
  public static final int BALLOONS_DIAL_Y = 139;
  public static final int BALLOONS_DIAL_WIDTH = DIAL_WIDTH * 2;

  public static final int DIGIT_X = 4;
  public static final int DIGIT_Y = 13;
  public static final int GEAR_X = 17;
  public static final int GEAR_Y = 0;

  public static final int STATE_ICON_X = 226;
  public static final int STATE_ICON_Y = 145;

  public static final int FOOTER_X = 20;
  public static final int FOOTER_Y = 173;
  public static final int FOOTER_WIDTH = 150;
  public static final int FOOTER_HEIGHT = 15;

  public static final int DIALOG_X = 26;
  public static final int DIALOG_Y = 71;
  public static final int DIALOG_WIDTH = 140;
  public static final int DIALOG_HEIGHT = 50;

  public static final int BUTTONS_Y = 184;
  public static final int BUTTONS_HEIGHT = 24;

  public static final int MUSIC_BUTTON_X = 220;
  public static final int MUSIC_BUTTON_WIDTH = 20;
  public static final int SOUND_BUTTON_X = 240;
  public static final int SOUND_BUTTON_WIDTH = 14;
  public static final int REPLAY_BUTTON_X = 262;
  public static final int REPLAY_BUTTON_WIDTH = 24;
  public static final int EXIT_BUTTON_X = 293;
  public static final int EXIT_BUTTON_WIDTH = 24;

  public static final int STATE_ICON_BORDER = 8;
  public static final int STATE_ICON_BUTTON_X = STATE_ICON_X - STATE_ICON_BORDER;
  public static final int STATE_ICON_BUTTON_Y = STATE_ICON_Y - STATE_ICON_BORDER;
  public static final int STATE_ICON_BUTTON_SIZE = TILE_SIZE + 2 * STATE_ICON_BORDER;

  public static final int EDITOR_BUTTONS_X = 213;
  public static final int EDITOR_BUTTONS_Y = 149;

  public static final int PLAY_BUTTON_X = 262;
  public static final int PLAY_BUTTON_WIDTH = 24;
  public static final int CYCLE_BUTTON_Y = 180;
  public static final int CYCLE_BUTTON_SIZE = 15;
  public static final int CYCLE_LEFT_BUTTON_X = 218;
  public static final int CYCLE_RIGHT_BUTTON_X = 243;
}
