'use strict';

class Item {
	
	constructor(type) {

		this.type = type;

		if( this.type == 'sword' ) {
			this.collectable = true;
		}

		this.image = new Image();
		this.image.src = 'sprites/' + type + '.png';

		this.draw = function(x, y) {
			c.drawImage(this.image, x, y);
		}
	}
}

function randomItemType() {

	var types = [
		'sword',
		'gem'
	];

	var index = Math.floor(Math.random() * 2);
	return types[index];
	console.log('item');
}