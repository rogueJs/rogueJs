'use strict';

class Enemy {
	
	constructor(type) {

		this.type = type;
		this.image = new Image();
		this.image.src = 'sprites/' + type + '.gif';
		this.strength = randomEnemyStrength();
	}

	draw(x, y) {
		c.drawImage(this.image, x, y);
	}
}

function randomEnemyType() {

	var types = [
		'zombie',
		'zombie2',
		'zombie3'
	];

	var index = Math.floor(Math.random() * 3);
	return types[index];
}

function randomEnemyStrength() {
	return Math.random() * 10;
}