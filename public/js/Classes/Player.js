"use strict";
class Player {

	constructor() {
		this.draw = function(x, y) {
			c.strokeStyle = 'rgb(100, 60, 10)';
			c.beginPath();
			c.arc((x * 25) + 12.5, (y * 25) + 12.5, 10, 0, Math.PI*2);
			c.lineWidth = 5;
			c.stroke();
		}
		this.level = 1;
		this.experience = 50;

		this.strength = 0;
		this.battleStrength = 0;

		this.equipped = ['sword'];

		this.equip = function(equipment) {
			this.equipped.push(equipment);
			if( equipment == 'sword' ) {
				this.strength ++;
			}
			else if( equipment == 'gem' ) {
				this.experience += 5;
				this.level = (Math.floor(this.experience / 10));
				console.log('exp gem:' + this.experience);
				console.log('level gem:' + this.level);

			}
		}
	}
}