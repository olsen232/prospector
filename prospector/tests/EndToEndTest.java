import xor.core.AsciiMazeLoader;
import xor.core.Control;
import xor.core.Maze;
import xor.core.MazeState;

import java.io.File;
import java.io.IOException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class EndToEndTest {

  public static final String XOR_MAZES = "../assets/target/classes/assets/standard.mazes.txt";
  public static final String PROCYON_MAZES = "../assets/target/classes/assets/standard2.mazes.txt";
  public static final String SOLUTIONS = "../../SOLUTIONS.md";
  
  public static void main(String[] args) throws IOException {
    List<Maze> xorMazes = AsciiMazeLoader.loadList(readFile(XOR_MAZES));
    List<Maze> procyonMazes = AsciiMazeLoader.loadList(readFile(PROCYON_MAZES));
    Map<String, CharSequence> solutions = loadSolutions(readFile(SOLUTIONS));

    boolean success = true;
    success &= checkSolutions(xorMazes, solutions);
    success &= checkSolutions(procyonMazes, solutions);
    System.out.println("========================================");
    System.out.println(success ? "Overall: SUCCESS" : "Overall: FAILURE");
    System.exit(success ? 0 : 1);
  }

  private static boolean checkSolutions(List<Maze> mazes, Map<String, CharSequence> solutions) {
    boolean success = true;
    for (int i = 0; i < mazes.size(); i++) {
      success &= checkSolution(mazes.get(i), solutions);
    }
    return success;
  }
  
  private static boolean checkSolution(Maze maze, Map<String, CharSequence> solutions) {
    CharSequence moves = solutions.get(maze.title());
    if (moves == null) return fail(maze, "No solution found");

    MazeState mazeState = new MazeState(maze);
    for (int m = 0; m < moves.length(); m++) {
      if (mazeState.state() != MazeState.State.WAITING_FOR_PLAYER) {
        return fail(maze, moves, m, "Unexpected state: " + mazeState.state());
      }
      Control control = Control.forLetter(moves.charAt(m));
      if (!mazeState.tryAct(control)) {
        return fail(maze, moves, m, "Failed to apply control: " + control);
      }
      mazeState.advanceUntilSettled();
    }
    
    if (mazeState.state() != MazeState.State.LEVEL_COMPLETED) {
      return fail(maze, "Failed to complete maze after " + moves.length() + " moves");
    }

    return success(maze, "Completed in " + moves.length() + " moves");
  }
  
  private static boolean success(Maze maze, String detail) {
    System.out.println(maze.title() + " - SUCCESS: " + detail);
    return true;
  }
  
  private static boolean fail(Maze maze, String failure) {
    System.out.println(maze.title() + " - FAILED: " + failure);
    return false;
  }
  
  private static boolean fail(Maze maze, CharSequence moves, int m, String failure) {
    int start = Math.max(0, m - 10);
    String ellipses = (start == 0) ? "" : "...";
    String context = "After " + m + " moves [" + ellipses + moves.subSequence(start, m + 1) + "]: ";
    return fail(maze, context + failure);
  }
      
  public static Map<String, CharSequence> loadSolutions(String in) {
    Map<String, CharSequence> result = new HashMap<>();

    String title = "";
    StringBuilder moves = new StringBuilder();
    for (String line : in.split("\n")) {
      if (line.matches("^[UuDdLlRrXx]+$")) {
        moves.append(line);
      }  else { 
        if (moves.length() > 0) {
          result.put(title, moves.toString());
          moves.setLength(0);
        }
        if (!line.matches("\\s*")) {
          title = line;
        }
      }
    }
    return result;   
  }
  
  public static String readFile(String filename) throws IOException {
    Scanner scanner = new Scanner(new File(filename));
    String text = scanner.useDelimiter("\\A").next();
    scanner.close();
    return text;
  }
}
