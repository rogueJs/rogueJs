"use strict"; 

var game = (document).getElementById('game');

var expTarget = (document).getElementById('experience');
var levTarget = (document).getElementById('level');
var strTarget = (document).getElementById('strength');
var healthTarget = (document).getElementById('health');
var msgTarget = (document).getElementById('gameMsg');

var c = game.getContext('2d');
var mouseX, mouseY;
var movement;

var gameWorld = new GameWorld();

document.addEventListener('keydown', keyMove);
document.getElementById('stop').addEventListener('click', stopGame);

var intervalId = window.setInterval(gameLoop, 100);
