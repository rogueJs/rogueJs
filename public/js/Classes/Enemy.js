'use strict';

class Enemy {
	
	constructor(type) {

		this.type = type;

		this.image = new Image();
		this.image.src = 'sprites/' + type + '.png';

		this.strength = randomEnemyStrength();

		this.draw = function(x, y) {
			c.drawImage(this.image, x, y);
		}
	}
}

function randomEnemyType() {

	var types = [
		'octo',
		'skull'
	];

	var index = Math.floor(Math.random() * 2);
	return types[index];
}

function randomEnemyStrength() {
	return Math.random() * 10;
}