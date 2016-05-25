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
		this.level = 0;
		this.experience = 0;

		this.strength = 0;
		this.battleStrength = 0;
		this.health = 10;

		this.equipped = ['sword'];
	}
	equip(equipment) {
		this.equipped.push(equipment);
		if( equipment == 'sword' ) {
			this.strength ++;
			msgTarget.innerHTML += 'You picked up a ' + equipment + '! Your strength increases.<br>';
		}
		else if( equipment == 'gem' ) {
			this.gainXP(5);
			msgTarget.innerHTML += 'You picked up a ' + equipment + '! Your experience increases.<br>';
		}
		else if( equipment == 'heart' ) {
			this.health += 1;
			msgTarget.innerHTML += 'You picked up a ' + equipment + '! Your health increases.<br>';
		}
	}
	gainXP(xp) {
		this.experience += xp;
		var newLevel = Math.floor(this.experience / (10 + this.level));

		if( newLevel > this.level ) {
			msgTarget.innerHTML += 'LEVEL UP!!<br>';
		}

		this.level = Math.floor(this.experience / (10 + this.level));

	}
	
}