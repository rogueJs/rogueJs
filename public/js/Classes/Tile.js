"use strict";

class Tile {

	constructor(type) {

		this.type = type;
		
		if( this.type == 'brick' ) {
			this.colidable = true;
		}

		this.image = new Image();
		this.image.src = 'sprites/' + type + '.jpg';

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
			c.drawImage(this.image, x, y);
		}

		this.drawOutline = function(x, y) {
			c.fillStyle = "#ff0000";
			c.fillRect(x, y, 25, 25);
		}
	}
}

function randomType() {

	var types = [
		'grass',
		'brick',
		'grey',
		'grey',
		'grey'
	];

	var index = Math.floor(Math.random() * 5);
	return types[index];
}