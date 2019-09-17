package xor.core;

import static xor.core.PixelConstants.*;

public class ControlState {

  public final int mouseScale;

  private int controlBits = 0;
  private Control freshControl = null;

  private int extraControlBits = 0;
  private ExtraControl freshExtraControl = null;

  private boolean freshMouseClick;
  private boolean mousePressed;
  private int lastMouseX;
  private int lastMouseY;
  
  public ControlState() {
    this.mouseScale = Platform.INSTANCE.zoom;
  }

  public void onKeyChange(playn.core.Key k, boolean pressed) {
    Control c = Control.forKey(k);
    if (c != null) onControlChange(c, pressed);
    ExtraControl ec = ExtraControl.forKey(k);
    if (ec != null) onExtraControlChange(ec, pressed);
  }

  public void onControlChange(Control c, boolean pressed) {
    int lastControlBits = controlBits;
    if (pressed) {
      controlBits |= c.bitCode;
      if (lastControlBits != controlBits) freshControl = c;
    } else {
      controlBits &= ~c.bitCode;
      freshControl = null;
    }
  }

  public void onExtraControlChange(ExtraControl c, boolean pressed) {
    if (pressed) {
      extraControlBits |= c.bitCode;
      freshExtraControl = c;
    } else {
      extraControlBits &= ~c.bitCode;
      freshExtraControl = null;
    }
  }

  public void onMouseChange(int rawX, int rawY, boolean pressed) {
    mousePressed = pressed;
    if (mousePressed) {
      lastMouseX = rawX / mouseScale;
      lastMouseY = rawY / mouseScale;
      freshMouseClick = true;
    }
  }

  public void onMouseDragged(int rawX, int rawY) {
    if (mousePressed && !freshMouseClick) {
      lastMouseX = rawX / mouseScale;
      lastMouseY = rawY / mouseScale;
    }
  }

  public boolean isMousePressed() {
    return mousePressed;
  }

  public void clearFresh() {
    freshControl = null;
    freshExtraControl = null;
    freshMouseClick = false;
  }

  public Control onlyPressedControl() {
    for (Control c : Control.ALL_CONTROLS) {
      if (c.bitCode == controlBits) return c;
    }
    return null;
  }

  public Control freshControl() {
    Control result = freshControl;
    freshControl = null;
    return result;
  }

  public boolean isAnyFreshControl() {
    return freshControl() != null;
  }

  public boolean isPressed(Control c) {
    return (controlBits & c.bitCode) != 0;
  }

  public boolean isFresh(Control c) {
    if (freshControl == c) {
      freshControl = null;
      return true;
    }
    return false;
  }

  public ExtraControl freshExtraControl() {
    ExtraControl result = freshExtraControl;
    freshExtraControl = null;
    return result;
  }

  public boolean isFresh(ExtraControl c) {
    if (freshExtraControl == c) {
      freshExtraControl = null;
      return true;
    }
    return false;
  }

  public boolean isAnyFreshExtraControl() {
    freshExtraControl = null;
    return extraControlBits != 0;
  }

  public boolean isPressed(ExtraControl c) {
    return (extraControlBits & c.bitCode) != 0;
  }

  public boolean peekFreshMouseClick() {
    return freshMouseClick;
  }

  public boolean isFreshMouseClick() {
    boolean result = freshMouseClick;
    freshMouseClick = false;
    return result;
  }

  public int lastMouseX() {
    return lastMouseX;
  }

  public int lastMouseY() {
    return lastMouseY;
  }

  public int lastMouseViewportX() {
    return lastMouseX - VIEWPORT_X;
  }

  public int lastMouseViewportY() {
    return lastMouseY - VIEWPORT_Y;
  }

  public boolean isFreshViewportClick() {
    return isFreshClickInside(VIEWPORT_X, VIEWPORT_Y, VIEWPORT_SIZE_PX, VIEWPORT_SIZE_PX);
  }

  public boolean isFreshMusicClick() {
    return isFreshClickInside(MUSIC_BUTTON_X, BUTTONS_Y, MUSIC_BUTTON_WIDTH, BUTTONS_HEIGHT);
  }

  public boolean isFreshSoundClick() {
    return isFreshClickInside(SOUND_BUTTON_X, BUTTONS_Y, SOUND_BUTTON_WIDTH, BUTTONS_HEIGHT);
  }

  public boolean isFreshReplayClick() {
    return isFreshClickInside(REPLAY_BUTTON_X, BUTTONS_Y, REPLAY_BUTTON_WIDTH, BUTTONS_HEIGHT);
  }

  public boolean isFreshExitClick() {
    return isFreshClickInside(EXIT_BUTTON_X, BUTTONS_Y, EXIT_BUTTON_WIDTH, BUTTONS_HEIGHT);
  }

  public boolean isFreshStateIconClick() {
    return isFreshClickInside(STATE_ICON_BUTTON_X, STATE_ICON_BUTTON_Y, STATE_ICON_BUTTON_SIZE, STATE_ICON_BUTTON_SIZE);
  }

  public boolean isFreshPlayClick() {
    return isFreshClickInside(PLAY_BUTTON_X, BUTTONS_Y, PLAY_BUTTON_WIDTH, BUTTONS_HEIGHT);
  }

  public boolean isFreshCycleLeftClick() {
    return isFreshClickInside(CYCLE_LEFT_BUTTON_X, CYCLE_BUTTON_Y, CYCLE_BUTTON_SIZE, CYCLE_BUTTON_SIZE);
  }

  public boolean isFreshCycleRightClick() {
    return isFreshClickInside(CYCLE_RIGHT_BUTTON_X, CYCLE_BUTTON_Y, CYCLE_BUTTON_SIZE, CYCLE_BUTTON_SIZE);
  }

  public boolean isFreshClickInside(int x, int y, int width, int height) {
    if (freshMouseClick && isMouseInside(x, y, width, height)) {
      freshMouseClick = false;
      return true;
    }
    return false;
  }

  public boolean isFreshClickInsideViewport(int x, int y, int width, int height) {
    if (freshMouseClick && isMouseInside(x + VIEWPORT_X, y + VIEWPORT_Y, width, height)) {
      freshMouseClick = false;
      return true;
    }
    return false;
  }

  public boolean isViewportPressed() {
    return mousePressed && isMouseInside(VIEWPORT_X, VIEWPORT_Y, VIEWPORT_SIZE_PX, VIEWPORT_SIZE_PX);
  }

  public boolean isMouseInside(int x, int y, int width, int height) {
    return (lastMouseX >= x && lastMouseX <= x + width)
        && (lastMouseY >= y && lastMouseY <= y + height);
  }
}
