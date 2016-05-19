"use strict"; 

var game = (document).getElementById('game');
var c = game.getContext('2d');
var mouseX, mouseY;
var movement;

var tileMap = populateTileMap();

var player = new Player(3,2);

game.addEventListener('mousemove', trackMouse);

document.addEventListener('keydown', keyMove);

document.getElementById('stop').addEventListener('click', stopGame);


var intervalId = window.setInterval(gameLoop, 100);