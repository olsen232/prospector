import xor.core.AsciiMazeLoader;
import xor.core.ReplayEncoder;
import xor.core.Control;
import xor.core.Maze;
import xor.core.MazeState;

import java.io.IOException;

import java.util.List;
import java.util.Map;

public class SolutionTweaker {

  public static final String XOR_MAZES = "../assets/target/classes/assets/standard.mazes.txt";
  public static final String PROCYON_MAZES = "../assets/target/classes/assets/standard2.mazes.txt";
  public static final String SOLUTIONS = "../../SOLUTIONS.md";
  
  public static void main(String[] args) throws IOException {
    List<Maze> xorMazes = AsciiMazeLoader.loadList(EndToEndTest.readFile(XOR_MAZES));
    List<Maze> procyonMazes = AsciiMazeLoader.loadList(EndToEndTest.readFile(PROCYON_MAZES));
    Map<String, CharSequence> solutions = EndToEndTest.loadSolutions(EndToEndTest.readFile(SOLUTIONS));

    tweakSolutions(xorMazes, solutions);
    tweakSolutions(procyonMazes, solutions);
  }

  private static void tweakSolutions(List<Maze> mazes, Map<String, CharSequence> solutions) {
    for (Maze maze : mazes) {
      tweakSolution(maze, solutions.get(maze.title()), false);
    }
  }
  
  private static void tweakSolution(Maze maze, CharSequence moves, boolean secondPass) {
    if (moves == null) return;
    StringBuilder tweaked = new StringBuilder();

    MazeState mazeState = new MazeState(maze);
    NoopListener noopListener = new NoopListener();
    mazeState.mazeStateListeners.add(noopListener);
    
    int noopCount = 0;

    for (int m = 0; m < moves.length(); m++) {
      if (mazeState.state() != MazeState.State.WAITING_FOR_PLAYER) return;

      char c = moves.charAt(m);      
      Control control = Control.forLetter(c);
      tweaked.append(c);

      noopListener.noop = true;
      mazeState.tryAct(control);
      mazeState.advanceUntilSettled();

      noopCount = noopListener.noop ? noopCount + 1 : 0;
      if (noopCount >= 2 && opposite(control, Control.forLetter(moves.charAt(m - 1)))) {
        tweaked.setLength(tweaked.length() - 2);
        noopCount -= 2;
      }
    }
    
    if (mazeState.state() != MazeState.State.LEVEL_COMPLETED) return;

    if (moves.length() != tweaked.length()) {
      tweakSolution(maze, tweaked.toString(), true);
      return;
    } else if (secondPass) {
      System.out.println(maze.title());
      System.out.println(ReplayEncoder.limitWidth(tweaked.toString(), 80));
      System.out.println();
    }
  }

  static class NoopListener implements MazeState.MazeStateListener {
    boolean noop = true;
    @Override 
    public void onStateTransition(MazeState.State oldState, MazeState.State newState, MazeState.AdditionalEvent event) {
      noop &= (oldState == MazeState.State.WAITING_FOR_PLAYER || oldState == MazeState.State.PLAYER_MOVING) &&
               (newState == MazeState.State.WAITING_FOR_PLAYER || newState == MazeState.State.PLAYER_MOVING) &&
               event == MazeState.AdditionalEvent.NONE;
    }
  }

  static boolean opposite(Control c1, Control c2) {
    return c1.direction != null && c2.direction != null && c1.direction.opposite() == c2.direction;
  }

}
