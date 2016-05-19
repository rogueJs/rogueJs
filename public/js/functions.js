'use strict';
/*
game loop

 - process input

 - simulate game world

 - render
  - clear canvas
  - map
  - map object
  - character

 */
function gameLoop() {

	// checkMove();
	render();

}

function render() {


	clearCanvas();

	/* map draw: */
	for( var x = 0, length = tileMap.length;x < length; x++ ) {
		for( var y = 0; y < length; y++ ) {
			if( x == mouseX && y == mouseY) {
				tileMap[x][y].drawOutline(x * 25, y * 25);
			}
			else {
				tileMap[x][y].draw(x * 25, y * 25);

			}
		}
	}
	/*Insert map-stuff draw here */


	player.draw();
	

}

function clearCanvas() {
	c.fillStyle = '#000';
	c.fillRect(0,0,400,400);
}
function stopGame() {
	clearInterval(intervalId);
}
function keyMove(e){


	key = e.keyCode;

	switch(key) {

		case 37:
			player.playerX --;
			break
		case 39:
			player.playerX++;
			break;
		case 38:
			player.playerY--;
			break;
		case 40:
			player.playerY++;
			break;
	}
	console.log(tileMap[player.playerX][player.playerY]);

	tileAbove = tileMap[player.playerX][player.playerY -1];
	tileBelow = tileMap[player.playerX][player.playerY +1];
	tileLeft = tileMap[player.playerX -1][player.playerY];
	tileRight = tileMap[player.playerX +1][player.playerY];

	console.log(tileAbove.tileType);
	console.log(tileBelow.tileType);
	console.log(tileLeft.tileType);
	console.log(tileRight.tileType);

}