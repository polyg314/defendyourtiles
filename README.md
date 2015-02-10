# defendyourtiles
A ball and tile game made with Phaser.js


All of the game functionality can be found in the Main.js file. 

Initial code was drawn from the tutorial found at: http://dailyjs.com/2014/09/16/phaser-tutorial/

To make this a two-player game, I added additional values for the paddles (with WASD controls) and tiles.

Additionally, under the hit() event handler, I kept track of the tiles for each side, and therefore could state the winner at the end of the game. 
