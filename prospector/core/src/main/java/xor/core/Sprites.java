package xor.core;

import static xor.core.Cells.CellType.*;
import static xor.core.Player.Pose.*;
import static xor.core.Sprites.RollDirection.*;

import xor.core.Cells.CellType;
import xor.core.Player.Pose;

import java.io.IOException;
import java.util.Arrays;

public final class Sprites {
  private Sprites() {}

  enum RollDirection {
    HORIZ,
    VERTI;

    public final int code = this.ordinal();
  }
  public static final int NUM_ROLL_DIRECTIONS = RollDirection.values().length;

  public static final int SPRITE_SIZE = 24;

  public static final XorImage[] CELLS = new XorImage[Cells.NUM_CELL_TYPES];
  public static final XorImage[] HERB_POSES = new XorImage[Player.NUM_POSES];
  public static final XorImage[] PIP_POSES = new XorImage[Player.NUM_POSES];
  public static final XorImage[] SPHERE_ROLL = new XorImage[NUM_ROLL_DIRECTIONS];
  public static final XorImage[] ROCK_EYES = new XorImage[3];
  public static final XorImage[] HERB_DYING = new XorImage[4];
  public static final XorImage[] PIP_DYING = new XorImage[6];
  public static final XorImage[] EXPLOSION = new XorImage[9];

  private static final SplicedArrayList<XorImage> ALL_SPRITES = new SplicedArrayList<XorImage>()
      .add(CELLS)
      .add(HERB_POSES)
      .add(PIP_POSES)
      .add(SPHERE_ROLL)
      .add(ROCK_EYES)
      .add(HERB_DYING)
      .add(PIP_DYING)
      .add(EXPLOSION);

  public static final XorImage[][] PLAYERS_POSES = new XorImage[][] {
    HERB_POSES, PIP_POSES,
  };

  public static final XorImage[][] PLAYERS_DYING = new XorImage[][] {
    HERB_DYING, PIP_DYING,
  };

  public static final int[] SPRITE_SHEET = new int[] {
    herb(CENTER),   herb(UP),      herb(DOWN),    herb(HALF_RIGHT), herb(RIGHT),
    pip(CENTER),    pip(UP),       pip(DOWN),     pip(HALF_RIGHT),  pip(RIGHT),
    cell(BALLOON),  cell(MAP_NW),  cell(MAP_NE),  cell(ROCK),       cell(ZEPPELIN),
    cell(DECOY),    cell(MAP_SW),  cell(MAP_SE),  cell(FIELD_H),    cell(FIELD_V),
    cell(SPHERE),   sphere(HORIZ), sphere(VERTI), cell(DYNAMITE),   cell(TIN_BOMB),
    cell(TELEPORT), cell(EXIT),    rockEyes(0),   rockEyes(1),      rockEyes(2),
    herbDying(0),   herbDying(1),  herbDying(2),  pipDying(0),      pipDying(1),
    explode(0),     explode(1),    explode(2),    explode(3),       explode(4),
    explode(5),     explode(6),    explode(7),    explode(8),       -1,
  };

  private static int cell(CellType cellType) {
    return ALL_SPRITES.indexOfElement(CELLS, cellType.code);
  }

  private static int herb(Pose pose) {
    return ALL_SPRITES.indexOfElement(HERB_POSES, pose.code);
  }

  private static int pip(Pose pose) {
    return ALL_SPRITES.indexOfElement(PIP_POSES, pose.code);
  }

  private static int sphere(RollDirection rd) {
    return ALL_SPRITES.indexOfElement(SPHERE_ROLL, rd.code);
  }

  private static int rockEyes(int frame) {
    return ALL_SPRITES.indexOfElement(ROCK_EYES, frame);
  }

  private static int herbDying(int frame) {
    return ALL_SPRITES.indexOfElement(HERB_DYING, frame);
  }

  private static int pipDying(int frame) {
    return ALL_SPRITES.indexOfElement(PIP_DYING, frame);
  }

  private static int explode(int frame) {
    return ALL_SPRITES.indexOfElement(EXPLOSION, frame);
  }

  public static void start() {
    Toolkit.start("sprites.png");
  }

  public static void load() {
    XorImage[] spritesSource = Toolkit.tile(Toolkit.xorImage(Toolkit.get("sprites.png")), SPRITE_SIZE);
    for (int src = 0; src < SPRITE_SHEET.length; src++) {
      int dest = SPRITE_SHEET[src];
      if (dest >= 0 && dest < ALL_SPRITES.size()) {
        ALL_SPRITES.set(dest, spritesSource[src]);
      }
    }

    copy(herb(CENTER), cell(HERB));
    copy(pip(CENTER), cell(PIP));

    copyAndFlipLTR(herb(HALF_RIGHT), herb(HALF_LEFT));
    copyAndFlipLTR(herb(RIGHT), herb(LEFT));
    copyAndFlipLTR(pip(HALF_RIGHT), pip(HALF_LEFT));
    copyAndFlipLTR(pip(RIGHT), pip(LEFT));

    copy(herbDying(1), herbDying(3));

    copyAndFlipLTR(pipDying(0), pipDying(3));
    copyAndFlipLTR(pipDying(1), pipDying(4));
    copy(pipDying(0), pipDying(2));
    copy(pipDying(3), pipDying(5));
  }

  private static void copy(int a, int b) {
    if (ALL_SPRITES.get(a) != null) {
      ALL_SPRITES.set(b, ALL_SPRITES.get(a));
    } else {
      ALL_SPRITES.set(a, ALL_SPRITES.get(b));
    }
  }

  private static void copyAndFlipLTR(int a, int b) {
    if (ALL_SPRITES.get(a) != null) {
      ALL_SPRITES.set(b, Toolkit.flipLTR(ALL_SPRITES.get(a)));
    } else {
      ALL_SPRITES.set(a, Toolkit.flipLTR(ALL_SPRITES.get(b)));
    }
  }

  public static int stateIconOffset(CellType cellType) {
    switch (cellType) {
      case HERB: case PIP: case BALLOON: case DECOY: case SPHERE: return 1;
      default: return 0;
    }
  }
}
