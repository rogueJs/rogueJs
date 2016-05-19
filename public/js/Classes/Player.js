"use strict";
class Player {

	constructor(x, y) {

		this.playerX = x;
		this.playerY = y;

		this.draw = function() {
			c.fillStyle = 'rgb(100, 60, 10)';
			c.beginPath();
			c.arc((this.playerX * 25) + 12.5, (this.playerY * 25) + 12.5, 10, 0, Math.PI*2);
			c.lineWidth = 5;
			c.stroke();
			// c.fillRect(this.playerX * 25, this.playerY * 25, 25, 25);
		}
	}
}