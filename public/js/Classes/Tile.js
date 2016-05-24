"use strict";

class Tile {

	constructor(type) {

		this.type = type;
		this.discovered = false;
		
		if( this.type == 'bush' && Math.random() > 0.2 ) {
			this.item = new Item(randomItemType());
		}
		else {
			this.item = null;
		}

		if( this.type == 'brick' || this.type == 'edge' ) {
			this.colidable = true;
		}

		if( this.item == null && this.type != 'brick' && Math.random() > 0.8 ) {
			this.enemy = new Enemy(randomEnemyType());
			this.colidable = true;
		}
		else {
			this.enemy == null;
		}
		if( this.type != 'edge' ) {
			this.image = new Image();
			this.image.src = 'sprites/' + type + '.jpg';
		}
		
		this.draw = function(x, y) {

			if( this.discovered ) {
				c.drawImage(this.image, x, y);

				if( this.item != null ) {
					this.item.draw(x, y);
				}
				if( this.enemy != null ) {
					this.enemy.draw(x, y);
				}
			}
			else {
				c.fillStyle = '#000';
				c.fillRect(x, y, 25, 25);
			}
		}
	}
}

function randomType(seed, x, y) {

	var types = [
		'bush',
		'brick',
		'grass',
		'grass',
		'grass'
	];

	var rng = new Math.seedrandom(x * y * seed);

	var index = Math.floor(rng() * 5);

	return types[index];
}