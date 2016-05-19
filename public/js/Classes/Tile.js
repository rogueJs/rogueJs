"use strict";

class Tile {

	constructor(color) {

		this.color = color;
		this.image = new Image();
		this.image.src = randomSprite();

/* Vända logiken så att en random typ genereras och sedan tilldelas 
bild enligt det värdet */

		switch(this.image.getAttribute('src')) {
			case 'sprites/brick.jpg':
				this.tileType = 'brick';
				break;
			case 'sprites/grey.jpg':
				this.tileType = 'road';
				break;
			case 'sprites/grass.jpg':
				this.tileType = 'grass';
				break;
		}


		this.draw = function(x, y) {
			c.fillStyle = this.color;

			c.drawImage(this.image, x, y);
		}

		this.drawOutline = function(x, y) {
			c.fillStyle = "#ff0000";
			c.fillRect(x, y, 25, 25);
		}
	}
}

function randomSprite() {

	var tiles = [
		'sprites/grass.jpg',
		'sprites/brick.jpg',
		'sprites/grey.jpg',
		'sprites/grey.jpg',
		'sprites/grey.jpg',
		
	];

	var index = Math.floor(Math.random() * 5);
	// console.log(index)

	return tiles[index];
}