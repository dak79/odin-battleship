# Battleship

## Live Preview

[Battleship](https://dak79.github.io/odin-battleship/)

## Description

This project is part of The Odin Project - Full Stack JavaScript Path. The main
goals is to implement a maintainable web app, expolring Unit Test.

## Technologies

- HTML
- CSS
- JavaScript ES6
- Git
- Npm
- Webpack

## Assignment

- Begin your app by creating the Ship class/factory (your choice).

  - Your ‘ships’ will be objects that include their length, the number of times
    they’ve been hit and whether or not they’ve been sunk.
  - Ships should have a hit() function that increases the number of ‘hits’ in
    your ship.
  - isSunk() should be a function that calculates it based on their length and
    the number of ‘hits’.

- Create Gameboard class/factory.

  - Gameboards should be able to place ships at specific coordinates by calling
    the ship factory function.
  - Gameboards should have a receiveAttack function that takes a pair of
    coordinates, determines whether or not the attack hit a ship and then
    sends the ‘hit’ function to the correct ship, or records the coordinates
    of the missed shot.
  - Gameboards should keep track of missed attacks so they can display them
    properly.
  - Gameboards should be able to report whether or not all of their ships have
    been sunk.

- Create Player.

  - Players can take turns playing the game by attacking the enemy Gameboard.
  - The game is played against the computer, so make the ‘computer’ capable of
    making random plays. The AI does not have to be smart, but it should know
    whether or not a given move is legal (i.e. it shouldn’t shoot the same
    coordinate twice).

- Create the main game loop and a module for DOM interaction.

  - The game loop should set up a new game by creating Players and Gameboards.
  - We’ll leave the HTML implementation up to you for now, but you should display
    both the player’s boards and render them using information from the Gameboard
    class/factory.
  - You need methods to render the gameboards and to take user input for attacking.
    For attacks, let the user click on a coordinate in the enemy Gameboard.
  - The game loop should step through the game turn by turn using only methods from
    other objects.
  - Create conditions so that the game ends once one player’s ships have all been
    sunk. This function is appropriate for the Game module.

- Finish it up
  - There are several options available for letting users place their ships.
  - You can polish the intelligence of the computer player by having it try
    adjacent slots after getting a ‘hit’.
