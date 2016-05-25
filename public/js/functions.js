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
		case 32:
			if( gameWorld.player.health <= 0 ) {
				clearInterval(intervalId);
				clearInterval(consoleInterval);
				initializeGame();
			}
			break;
	}
}

function displayStats(exp, lev, str, hp) {
	expTarget.innerHTML = exp;
	levTarget.innerHTML = lev;
	strTarget.innerHTML = str;
	healthTarget.innerHTML = hp;
}

function endGame() {
	msgTarget.innerHTML += '<br>GAME OVER!<br>Hit space to start over';
	clearInterval(intervalId);
	// clearInterval(consoleInterval);
}

function updateConsole() {
	consoleTarget.scrollTop = consoleTarget.scrollHeight;
}