"use strict"; 

var game = (document).getElementById('game');
var c = game.getContext('2d');
var mouseX, mouseY;
var movement;


// var tileMap = populateTileMap();

var gameWorld = new GameWorld();

document.addEventListener('keydown', keyMove);

document.getElementById('stop').addEventListener('click', stopGame);


var intervalId = window.setInterval(gameLoop, 100);