import xor.core.AsciiMazeLoader;
import xor.core.Control;
import xor.core.Maze;
import xor.core.MazeState;

import java.io.File;
import java.io.IOException;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EndToEndTest {

  public static final String XOR_MAZES = "../assets/target/classes/assets/standard.mazes.txt";
  public static final String XOR_SOLUTIONS = "../../SOLUTIONS.md";
  
  static class Solution {
    String title;
    CharSequence moves;
  }    
  
  public static void main(String[] args) throws IOException {
    List<Maze> xorMazes = AsciiMazeLoader.loadList(readFile(XOR_MAZES));
    List<Solution> solutions = loadSolutions(readFile(XOR_SOLUTIONS));
    boolean success = true;
    for (int i = 0; i < xorMazes.size(); i++) {
      success &= checkSolution(xorMazes.get(i), solutions.get(i), true);
    }
    System.out.println("========================================");
    System.out.println(success ? "Overall: SUCCESS" : "Overall: FAILURE");
    System.exit(success ? 0 : 1);
  }
  
  private static boolean checkSolution(Maze maze, Solution solution, boolean output) {
    if (!maze.title().equals(solution.title)) return fail(maze, "Solution title doesn't match: " + solution.title);
    MazeState mazeState = new MazeState(maze);
    
    for (int m = 0; m < solution.moves.length(); m++) {
      if (mazeState.state() != MazeState.State.WAITING_FOR_PLAYER) {
        return fail(maze, solution.moves, m, "Unexpected state: " + mazeState.state());
      }
      Control control = Control.forLetter(solution.moves.charAt(m));
      if (!applyControl(mazeState, control)) {
        return fail(maze, solution.moves, m, "Failed to apply control: " + control);
      }
    }
    
    if (mazeState.state() != MazeState.State.LEVEL_COMPLETED) {
      return fail(maze, "Failed to complete maze after " + solution.moves.length() + " moves");
    }

    return success(maze, "Completed in " + solution.moves.length() + " moves");
  }
  
  private static boolean applyControl(MazeState mazeState, Control control) {
    boolean result = (control == Control.OK) ? mazeState.trySwitchPlayer() : mazeState.tryMove(control.direction);
    while (!mazeState.isSettled()) {
      mazeState.advanceToNextState();
    }
    return result;
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
      
  private static List<Solution> loadSolutions(String in) {
    int start = in.indexOf("```") + 3;
    int end = in.lastIndexOf("```");
    in = in.substring(start, end);
    String[] parts = in.split("\n\\s*\n");
    List<Solution> result = new ArrayList<>();
    for (String part : parts) {
      Solution solution = new Solution();
      String[] lines = part.split("\n");
      StringBuilder moves = new StringBuilder();
      solution.moves = moves;
      for (String line : lines) {
        if (line.matches("^[UuDdLlRrXx]+$")) moves.append(line);
        else solution.title = line;
      }
      result.add(solution);
    }
    return result;   
  }
  
  private static String readFile(String filename) throws IOException {
    Scanner scanner = new Scanner(new File(filename));
    String text = scanner.useDelimiter("\\A").next();
    scanner.close();
    return text;
  }
}