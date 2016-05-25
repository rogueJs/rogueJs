'use strict';

class Item {
	
	constructor(type) {

		this.type = type;

		if( this.type == 'sword' ) {
			this.collectable = true;
		}

		this.image = new Image();
		this.image.src = 'sprites/' + type + '.png';
	}

	draw(x, y) {
		c.drawImage(this.image, x, y);
	}
}

function randomItemType() {

	var types = [
	'sword',
	'gem',
	'heart'
	];

	var index = Math.floor(Math.random() * 3);
	return types[index];
}