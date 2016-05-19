"use strict";

class Tile {

	constructor(type) {

		this.type = type;
		this.discovered = false;
		
		if( this.type == 'bush' && Math.random() > 0.9 ) {
			this.item = new Item(randomItemType());
		}
		else {
			this.item = null;
		}

		if( this.type == 'brick' ) {
			this.colidable = true;
		}

		this.image = new Image();
		this.image.src = 'sprites/' + type + '.jpg';
		this.draw = function(x, y) {

			if( this.discovered ) {
				c.drawImage(this.image, x, y);

				if( this.item != null ) {
					this.item.draw(x, y);
				}
			}
			else {
				c.fillStyle = '#000';
				c.fillRect(x, y, 25, 25);
			}
		}
	}
}

function randomType() {

	var types = [
		'bush',
		'brick',
		'grass',
		'grass',
		'grass'
	];

	var index = Math.floor(Math.random() * 5);
	return types[index];
}