package xor.core;

import static xor.core.PixelConstants.*;

import xor.core.Cells.CellType;
import xor.core.MazeState.AdditionalEvent;
import xor.core.MazeState.MazeStateListener;
import xor.core.MazeState.State;
import xor.core.Player.PlayerState;
import xor.core.Player.Pose;
import xor.core.Sprites.RollDirection;

import java.awt.Color;
import java.awt.Graphics;

public class InGameMazeRenderer extends BaseMazeRenderer implements MazeStateListener {

  public static final boolean USE_CACHE = true;

  public final MazeState mazeState;
  public final Image[] wallTiles;
  public final Image[] floorTiles;

  public InGameMazeRenderer(MazeState mazeState) {
    this(mazeState,
        Tiles.WALL_TILES[mazeState.maze().wallTheme],
        Tiles.FLOOR_TILES[mazeState.maze().floorTheme]);
  }

  public InGameMazeRenderer(MazeState mazeState, Image[] wallTiles, Image[] floorTiles) {
    super(mazeState.maze());
    this.mazeState = mazeState;
    this.wallTiles = wallTiles;
    this.floorTiles = floorTiles;
    mazeState.mazeStateListeners.add(this);
  }
  
  @Override
  public void onStateTransition(State oldState, State newState, AdditionalEvent event) {
    if ((oldState == State.WAITING_FOR_PLAYER || oldState == State.PLAYER_MOVING) &&
        (newState == State.WAITING_FOR_PLAYER || newState == State.PLAYER_MOVING) &&
        (event == AdditionalEvent.NONE)) {
      return;
    }
    this.cache.invalidate();
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
        return Math.abs(x - mazeState.getActiveObjectX()) <= MazeState.getExplosionDx(cellType)
            && Math.abs(y - mazeState.getActiveObjectY()) <= MazeState.getExplosionDy(cellType);

      default:
        return false;
    }
  }

  @Override
  public void renderAnimations(int percent, Surface surface) {
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
      surface.drawTile(Sprites.PLAYERS_POSES[player.code][pose.code], x, y); 

    } else if (player.isAlive() || player.state() == PlayerState.TELEPORTING) {
      Pose pose = player.pose(percent);
      Image sprite = Sprites.PLAYERS_POSES[player.code][pose.code];
      surface.drawSlidingTile(sprite, x, y, player.movement(), percent);

    } else if (player.state() == PlayerState.DYING) {
      surface.drawTile(Sprites.PLAYERS_DYING[player.code].frame(percent), x, y);
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
        Image sprite = Sprites.CELLS[cellType.code];

        if (cellType == CellType.SPHERE && percent >= 25 && percent < 75) {
          RollDirection rd = mazeState.movement().isHorizontal() ? RollDirection.HORIZ : RollDirection.VERTI;
          sprite = Sprites.SPHERE_ROLL[rd.code];
        } else if (cellType == CellType.ROCK) {
          sprite = Sprites.ROCK_EYES[(int)(Sprites.ROCK_EYES.length * Math.random())];
        }

        surface.drawSlidingTile(sprite, x, y, mazeState.movement(), percent);

        break;
      case EXPLOSION:
        x = mazeState.getActiveObjectX();
        y = mazeState.getActiveObjectY();
        cellType = mazeState.getActiveObjectType();
        int fastPercent = 25 + (percent * 75 / 100);
        surface.drawTile(Sprites.EXPLOSION_ANIM.frame(fastPercent), x, y);
        for (Direction d : MazeState.getExplosionDirections(cellType)) {
          surface.drawTile(Sprites.EXPLOSION_ANIM.frame(percent), d.dx(x), d.dy(y));
        }
      default:
    }
  }

  @Override
  public Image[] getThemedFloorTiles() {
    return floorTiles;
  }

  @Override
  public Image[] getThemedWallTiles() {
    return wallTiles;
  }
}
    
