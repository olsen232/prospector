# Prospector in the Mazes of Xor

### Quick Start

Navigate to the "Mazes of Xor" and select "Olaf's Warm Up".
Use the arrow keys to control Herb and Pip (press enter to switch between controlling one or the other).
Collect all the balloons and then find your way to the exit door.

### Introduction

This is a very faithful HTML5 remake of a 1989 Amiga game by Logotron, 
"Prospector in the Mazes of XOR", using the original graphics and sound.
That game was itself a complete remake of "XOR" for the BBC Micro, by Astral Software in 1987.
Blocks of quoted text like the following are from the 1989 manual.

```
MEET THE PROSPECTORS
     
Herb and Pip are Prospectors always on the look out for treasure.  Herb's
the fat guy with the striped pullover, and his trusty companion Pip, who is
ot unrelated to the Great Reptiles of the Mesozoic Era, is the other one. 
When they heard about the legendary maze of Xor, they knew there wouldn't
be much treasure around, but it would be a great chance to try the jetpacks
they'd recently bought at the local Fishing Shop.

Once inside the mazes, however, the terrible truth soon dawned on them. 
Unless they collected all the balloons on each level, and got to the exit
of each maze, they would never escape alive.  Somewhere somehow, the Xor
himself was watching every move, and clocking it up.  And Herb and Pip have
to beat that clock...
```

### Playing the Game

```
The display to the right shows you the number of moves that you have made
and below this, the remaining number of balloons that you need to collect. 
You control the Prospectors "Herb and Pip" as they negotiate the maze
collecting balloons.  Once all the balloons have been collected, one of the
Prospectors has to make his way to the exit to complete the maze.  And all
of this has to be done in no more than two thousand moves.  If you complete
a maze in a fewer number of moves than ever before then the computer will
save the number of moves to disk.
     
Collecting the balloons is not as easy as it sounds, for many obstacles
block your way.
     
Decoy Balloons - these look similar to normal balloons but a nasty thing
happens when you touch them.
     
Power Fields - horizontal or vertical.  If you step into them in the
correct direction then they will disappear.  But if you try to step into
them in the wrong direction they will be just as impenetrable as walls.
     
Zeppelins - when nothing blocks their path, they have a strong tendency to
drift to the left.  Warning Zeppelins can squash you if you get in their
way!
     
Rocks - these tumble down when pushed over the edge.  Make sure none
land on your head!
     
Spheres - these look harmless but once they start rolling there's no
stopping them.
     
Maps - there are four pieces of the map, hidden in the maze.  Collect a
piece and you will see it appear in the box in the top right-hand
corner.  White dots on the map show the locations of balloons to
collect.
     
The Dynamite Pack - if a rock falls on this or a Zeppelin collides with
it then it explodes.  this is very useful for blowing holes in walls
but beware that you do not blow up any balloons or you will never
complete the maze.
     
Tin Bomb - this bomb moves around like a Zeppelin and will also blow up
in a different manner if a rock or Zeppelin hits it.
     
Teleporter - also known as BMUS (Beam Me Up Scottie!).  If you walk
into one of then then it will teleport you to another part of the maze.
If something is blocking your way though then the teleporter will
automatically beam you back.
     
The Exit - the exit is locked until you collect all the balloons.  Then
it will become unlocked and you can escape.
```

The game is not time limited so you have all the time you need to think - but it is and was very unforgiving.
Every level is the same size - that is, large -
and messing up even a single puzzle on the level can prevent you from collecting every single balloon,
which will prevent you from finishing the level. 
Even just trying to walk from one place to another can go wrong when you bump into an obstacle and cause it
to block your path, especially since you cannot see very far ahead of yourself.

There are a few ways in which this remake is easier than the original - they are as follows:
- You are no longer limited to 2000 moves
- You can zoom out to see further (see [Controls](#Controls)).
- Replays now can undo mistakes (see [Replay Function](#Replay-Function))

If you like a challenge and you are 1989-level gifted, then just don't make use of these new features.

### Controls

Keys:
- Arrow keys control the prospectors.
- Enter key switches between the two prospectors.
- Escape key exits the current level, or interrupts a replay.
- Minus key or [ zooms out to see more of the level.
- Plus key or ] zooms back in.
- Shift key fast-forwards while held.

Click the following icons in the lower-right corner of the screen:
- The golden box showing Herb or Pip switches between the two prospectors.
- The musical notes turns music on or off.
- The soundwave turns sounds on or off.
- The circular arrow replays the current level or last-played level.
- The exit door exits the current level, or interrupts a replay.

### Replay Function

As in the original game from 1989, clicking the circular arrow shows a replay of you playing the level you last played -
or if clicked during play, then it replays the level you are currently playing, right back up to the current instant.
Then you can continue playing it as before. 
Originally this was only useful to see where you had gone wrong,
but in the HTML5 version there is now the option to interrupt a replay.
That is, on realizing you have made a mistake, you click replay,
and then interrupt the replay by pressing Escape shortly before you make the mistake,
and this time try something different that you hope works out better.

Having a replay function for fixing mistakes is unusual - most games let you load a saved game to fix a mistake -
but it has the following advantages:
- It is true to the original.
- You don't have to save game regularly so that you can undo a mistake.
- It encourages slow thinking ahead and prevents rapid and thoughtless trial and error, as in the original.

Admittedly, the replay function is time consuming and takes some getting used to.
If you don't like it, feel free to simply play the level through without making a mistake, as in the original.

#### Replaying replays
If you are really stuck on a particular puzzle and really must do some trial and error, then:
Play the level up to that point, then click replay and let the replay run to the finish.
Now each time you fail to solve the puzzle and need to try it again, double click on the replay icon.
Double clicking "replays the last replay" and so will take you again to the start of the puzzle.
Again, this can take some getting used to, so feel free to play the game without this, it was originally intended.

### Level Editor

A level editor is available from the main menu.
Select a brush by opening the brush palette and clicking on the brush you want.
Clicking on the level then paints the selected brush into the level.

Keys:
- Arrow keys scrolls the level around.
- Enter opens and closes the brush palette.
- P starts playing the level.
- Escape key stops playing the level, or exits the editor.

Click the following icons in the lower-right corner of the screen:
- The currently selected brush is shown in a golden box.
- Clicking the golden box opens or closes the brush palette.
- Clicking the arrows underneath the golden box changes the levels theme.
- Shift-clicking the same arrows changes only the floor theme (not the walls).
- The play icon starts playing the level.
- The exit door icon stops playing the level, or exits the editor.

It is recommended to put one each of Herb and Pip, at least one exit door, and either zero or two teleports.

### Load / Save

To save your current highscores, your most recent replay,
and/or a level you have created in the level editor, click "Load / Save" in the main menu.
Then copy the text you are shown, and save it as a text file, or publish it somewhere.
Then click cancel to return to the game.

To load it at a later date, again, click "Load / Save".
This time, paste in the text have saved, and click "Load Highscores / Maze / Replay".

### Play the game

Playable at https://olsen232.github.io/prospector/
