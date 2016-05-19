'use strict';

function gameLoop() {
	gameWorld.update();

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
			gameWorld.direction = 'left';
			break
		case 39:
			gameWorld.direction = 'right';
			break;
		case 38:
			gameWorld.direction = 'up';
			break;
		case 40:
			gameWorld.direction = 'down';
			break;
	}
}