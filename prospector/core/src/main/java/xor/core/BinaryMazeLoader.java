package xor.core;

import xor.core.Cells.CellType;

import java.io.DataInputStream;
import java.io.EOFException;
import java.io.InputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public final class BinaryMazeLoader {
  private BinaryMazeLoader() {}

  // Constants for binary .mazes files.
  private static final int NUM_MAZES = 15;
  private static final int TITLE_LENGTH = 18;
  private static final int GRID_OFFSET = 31;
  private static final int TOTAL_MAZE_LENGTH = 1124;

  public static List<Maze> loadList(InputStream inputStream) throws IOException {
    List<Maze> mazes = new ArrayList<Maze>();
    for (int i = 0; i < NUM_MAZES; i++) {
      Maze maze = loadMaze(inputStream);
      maze.wallTheme = i;
      maze.floorTheme = i;
      mazes.add(maze);
    }
    ensureEOF(inputStream);
    
    return mazes;
  }

  public static Maze loadMaze(InputStream inputStream) throws IOException {
    DataInputStream dataInput = toDataInputStream(inputStream);

    byte[] titleBytes = new byte[TITLE_LENGTH];        
    dataInput.readFully(titleBytes);
    Maze maze = new Maze(cStringToString(titleBytes), Maze.STANDARD_GRID_SIZE);

    skipFully(dataInput, GRID_OFFSET - titleBytes.length);
    dataInput.readFully(maze.data);

    skipFully(dataInput, TOTAL_MAZE_LENGTH - GRID_OFFSET - maze.data.length);
    maze.updateAllWalls();
    return maze;
  }

  private static DataInputStream toDataInputStream(InputStream inputStream) throws IOException {
    if (inputStream instanceof DataInputStream) {
      return (DataInputStream) inputStream;
    }
    return new DataInputStream(inputStream);
  }

  private static void skipFully(InputStream inputStream, int numBytes) throws IOException {
    if (numBytes < 0) throw new IllegalArgumentException("skipFully: numBytes=" + numBytes);
    if (numBytes == 0) return;

    long bytesSkipped = 0, totalBytesSkipped = 0;
    do {
      bytesSkipped = inputStream.skip(numBytes);
    } while (bytesSkipped > 0 && (totalBytesSkipped += bytesSkipped) < numBytes);
    if (totalBytesSkipped < numBytes) throw new EOFException("EOF when trying to skip forward " + numBytes);
  }

  private static void ensureEOF(InputStream inputStream) throws IOException {
    try {
      int b = inputStream.read();
      if (b != -1) {
        throw new IOException("Expected EOF but found: 0x" + ByteGrid.hexByte(b));
      }
    } catch (EOFException e) {
      // Expected.
    }
  }
  
  private static String cStringToString(byte[] cString) {
    return (cString[0] == 0) ? "" : new String(cString).split("\0", 2)[0];
  }
}
