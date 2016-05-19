"use strict";
class Player {

	constructor() {

		

		this.draw = function(x, y) {
			c.fillStyle = 'rgb(100, 60, 10)';
			c.beginPath();
			c.arc((x * 25) + 12.5, (y * 25) + 12.5, 10, 0, Math.PI*2);
			c.lineWidth = 5;
			c.stroke();
			// c.fillRect(this.playerX * 25, this.playerY * 25, 25, 25);
		}
	}
}