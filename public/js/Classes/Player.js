"use strict";
class Player {

	constructor() {

		this.level = 0;
		this.experience = 0;

		this.strength = 0;
		this.battleStrength = 0;
		this.health = 10;

		this.equipped = [];
		this.image = new Image;

		this.image.src = 'sprites/heroNoSword.png';
		

		this.draw = function(x, y) {
			c.drawImage(this.image, (x * 25), (y * 25));
		}
		
	}
	equip(equipment) {
		this.equipped.push(equipment);
		if( equipment == 'sword' ) {
			this.strength ++;
			this.image.src = 'sprites/hero.png';
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