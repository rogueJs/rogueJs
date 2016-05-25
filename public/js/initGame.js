"use strict"; 

var expTarget = (document).getElementById('experience');
var levTarget = (document).getElementById('level');
var strTarget = (document).getElementById('strength');
var healthTarget = (document).getElementById('health');
var msgTarget = (document).getElementById('gameMsg');

var consoleTarget = (document).getElementById('console');


document.addEventListener('keydown', keyMove);
document.getElementById('stop').addEventListener('click', stopGame);

var game, c, movement, gameWorld, intervalId, consoleInterval;

initializeGame();


function initializeGame() {
	game = (document).getElementById('game');

	c = game.getContext('2d');

	gameWorld = new GameWorld();

	intervalId = window.setInterval(gameLoop, 100);
	msgTarget.innerHTML = '';

	consoleInterval = setInterval(updateConsole, 100);
}

