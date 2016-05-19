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

	gameWorld.validateMove();
	render();
}

function render() {

	clearCanvas();

	gameWorld.map.draw();

	gameWorld.player.draw(gameWorld.playerX, gameWorld.playerY);
}

function clearCanvas() {
	c.fillStyle = '#000';
	c.fillRect(0,0,400,400);
}
function stopGame() {
	clearInterval(intervalId);
}

function keyMove(e){

	var key = e.keyCode;

	switch(key) {

		case 37:
			// player.playerX --;
			gameWorld.direction = 'left';
			// console.log(gameWorld.direction);
			break
		case 39:
			// player.playerX++;
			gameWorld.direction = 'right';
			break;
		case 38:
			// player.playerY--;
			gameWorld.direction = 'up';
			break;
		case 40:
			// player.playerY++;
			gameWorld.direction = 'down';
			break;
	}
	
	// console.log(map.tileMap[player.playerX][player.playerY]);

	// var tileAbove = map.tileMap[player.playerX][player.playerY -1];
	// var tileBelow = map.tileMap[player.playerX][player.playerY +1];
	// var tileLeft = map.tileMap[player.playerX -1][player.playerY];
	// var tileRight = map.tileMap[player.playerX +1][player.playerY];

	// console.log(tileAbove.tileType);
	// console.log(tileBelow.tileType);
	// console.log(tileLeft.tileType);
	// console.log(tileRight.tileType);

}