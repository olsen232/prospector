package xor.core;

import static xor.core.PixelConstants.*;

import xor.core.Cells.CellType;
import xor.core.MazeState.State;
import xor.core.Player.PlayerState;
import xor.core.Player.Pose;
import xor.core.Sprites.RollDirection;

import java.awt.Color;
import java.awt.Graphics;

public class InGameMazeRenderer extends BaseMazeRenderer {

  public final MazeState mazeState;
  public final XorImage[] wallTiles;
  public final XorImage[] floorTiles;

  public InGameMazeRenderer(MazeState mazeState) {
    this(mazeState,
        Tiles.WALL_TILES[mazeState.maze().wallTheme],
        Tiles.FLOOR_TILES[mazeState.maze().floorTheme]);
  }

  public InGameMazeRenderer(MazeState mazeState, XorImage[] wallTiles, XorImage[] floorTiles) {
    super(mazeState.maze());
    this.mazeState = mazeState;
    this.wallTiles = wallTiles;
    this.floorTiles = floorTiles;
  }

  @Override
  protected Maze maze() {
    return mazeState.maze();
  }

  @Override
  protected boolean drawFloor(int x, int y) {
    return mazeState.areLightsOn();
  }

  @Override
  protected boolean drawWall(int x, int y) {
    return mazeState.areLightsOn() && !isAnimated(x, y);
  }

  @Override
  protected boolean drawSprite(int x, int y) {
    return !isAnimated(x, y);
  }

  private boolean isAnimated(int x, int y) {
    return isAnimatedPlayer(x, y) || isAnimatedObject(x, y);
  }
 
  private boolean isAnimatedPlayer(int x, int y) {
    Player player = mazeState.getActivePlayer();
    if (player != null && x == player.x() && y == player.y()) {
      PlayerState state = player.state();
      return state == PlayerState.ALIVE
          || state == PlayerState.EXPLODING
          || state == PlayerState.DYING;
    }
    return false;
  }

  private boolean isAnimatedObject(int x, int y) {
    switch (mazeState.state()) {
      case PLAYER_PUSHING_OBJECT:
      case OBJECT_MOVING:
        return x == mazeState.getActiveObjectX()
            && y == mazeState.getActiveObjectY();

      case EXPLOSION:
        if (mazeState.isBorder(x, y)) return false;
        CellType cellType = mazeState.getActiveObjectType();
        return Math.abs(x - mazeState.getActiveObjectX()) <= mazeState.getExplosionDx(cellType)
            && Math.abs(y - mazeState.getActiveObjectY()) <= mazeState.getExplosionDy(cellType);

      default:
        return false;
    }
  }

  @Override
  public void drawAnimations(int percent, Surface surface) {
    drawActivePlayer(percent, surface);
    drawActiveObject(percent, surface);
  }


  private void drawActivePlayer(int percent, Surface surface) {
    Player player = mazeState.getActivePlayer();
    if (player == null) return;
    int x = player.x();
    int y = player.y();

    if (mazeState.state() == State.SWITCHING_PLAYER) {
      Pose pose = percent < 50 ? Pose.UP : Pose.DOWN;
      surface.drawSpriteTile(Sprites.PLAYERS_POSES[player.code][pose.code], x, y); 

    } else if (player.isAlive() || player.state() == PlayerState.TELEPORTING) {
      Pose pose = player.pose(percent);
      XorImage sprite = Sprites.PLAYERS_POSES[player.code][pose.code];
      surface.drawSlidingSpriteTile(sprite, x, y, player.movement(), percent);

    } else if (player.state() == PlayerState.DYING) {
      surface.animateSpriteTile(Sprites.PLAYERS_DYING[player.code], x, y, 3, percent);
    }
  }

  private void drawActiveObject(int percent, Surface surface) {
    int x, y;
    switch (mazeState.state()) {
      case PLAYER_PUSHING_OBJECT:
      case OBJECT_MOVING:
        x = mazeState.getActiveObjectX();
        y = mazeState.getActiveObjectY();
        CellType cellType = mazeState.getActiveObjectType();
        XorImage sprite = Sprites.CELLS[cellType.code];

        if (cellType == CellType.SPHERE && percent >= 25 && percent < 75) {
          RollDirection rd = mazeState.movement().isHorizontal() ? RollDirection.HORIZ : RollDirection.VERTI;
          sprite = Sprites.SPHERE_ROLL[rd.code];
        } else if (cellType == CellType.ROCK) {
          sprite = Sprites.ROCK_EYES[(int)(Sprites.ROCK_EYES.length * Math.random())];
        }

        surface.drawSlidingSpriteTile(sprite, x, y, mazeState.movement(), percent);

        break;
      case EXPLOSION:
        x = mazeState.getActiveObjectX();
        y = mazeState.getActiveObjectY();
        cellType = mazeState.getActiveObjectType();
        int frame = 2 + (Sprites.EXPLOSION.length - 2) * percent / 100;
        surface.drawSpriteTile(Sprites.EXPLOSION[frame], x, y);
        for (Direction d : MazeState.getExplosionDirections(cellType)) {
          surface.animateSpriteTile(Sprites.EXPLOSION, d.dx(x), d.dy(y), 1, percent);
        }
      default:
    }
  }

  @Override
  protected XorImage[] getThemedFloorTiles() {
    return floorTiles;
  }

  @Override
  protected XorImage[] getThemedWallTiles() {
    return wallTiles;
  }
}
    
