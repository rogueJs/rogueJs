"use strict";

class GameWorld {

	constructor() {

		this.mapOffsetX = 1;
		this.mapOffsetY = 1;

		this.player = new Player();
		this.playerX = 3;
		this.playerY = 14;
		this.direction = '';
		this.changeMap();

		this.tileCurrent = this.map.tileMap[this.playerX][this.playerY];
	}


	update() {
		this.tileCurrent = this.map.tileMap[this.playerX][this.playerY];
		this.updateSurround();			
		this.validateMove();
		this.aliveCheck();
		this.discoverTile();
		displayStats(this.player.experience, this.player.level, this.player.strength, this.player.health);

		if( this.map.tileMap[this.playerX][this.playerY].type != 'edge' ) {

			if( this.map.tileMap[this.playerX][this.playerY].item ) {
				var item = this.map.tileMap[this.playerX][this.playerY].item;
				this.player.equip(item.type);
				this.map.tileMap[this.playerX][this.playerY].item = null;
			}
		}
	}

	validateMove() {
		switch(this.direction) {
			case 'left':
			if( !this.tileLeft.colidable ) {
				this.playerX --;
			}
			else if( this.tileLeft.type == 'edge' ) {	
				this.changeMap();

			}
			else if( this.tileLeft.enemy ) {
				this.resolveBattle(this.tileLeft.enemy, this.tileLeft);
			}
			break;
			case 'right':
			if( !this.tileRight.colidable ) {
				this.playerX ++;
			}
			else if( this.tileRight.type == 'edge' ) {	
				this.changeMap();

			}
			else if( this.tileRight.enemy ) {
				this.resolveBattle(this.tileRight.enemy, this.tileRight);
			}
			break;
			case 'up':
			if( !this.tileAbove.colidable ) {
				this.playerY --;
			}
			else if( this.tileAbove.type == 'edge' ) {	
				this.changeMap();

			}
			else if( this.tileAbove.enemy ) {
				this.resolveBattle(this.tileAbove.enemy, this.tileAbove);
			}
			break;
			case 'down':
			if( !this.tileBelow.colidable ) {
				this.playerY ++;
			}
			else if( this.tileBelow.type == 'edge' ) {	
				this.changeMap();
			}
			else if( this.tileBelow.enemy ) {
				this.resolveBattle(this.tileBelow.enemy, this.tileBelow);
			}
			break;
			default:
			break;
		}

		this.direction = '';
	}

	discoverTile() {
		if( this.tileLeft ) {
			this.tileLeft.discovered = true;

		}
		if( this.tileRight ) {
			this.tileRight.discovered = true;

		}
		if( this.tileAbove ) {
			this.tileAbove.discovered = true;

		}
		if( this.tileBelow ) {
			this.tileBelow.discovered = true;

		}
		if( this.tileCurrent ) {
			this.tileCurrent.discovered = true;
		}
	}

	resolveBattle(enemy, tile) {

		this.player.battleStrength = this.player.level + this.player.strength;

		msgTarget.innerHTML += 'Player Battle Strength: ' + this.player.battleStrength + '. Enemy Battle Strength: ' + enemy.strength + '<br>';

		if( this.player.equipped.indexOf('sword') != -1  && this.player.battleStrength > enemy.strength ) {
			tile.colidable = false;
			tile.enemy = null;

			this.player.gainXP( Math.floor(enemy.strength / 2) );
			msgTarget.innerHTML += 'Success! ' + Math.floor(enemy.strength / 2) + ' experience added.<br>';
		}
		else {
			this.player.health -= Math.floor(enemy.strength);
			msgTarget.innerHTML += 'Defeat. ' + Math.floor(enemy.strength) + ' health was lost.<br>';
		}
	}

	aliveCheck() {
		if( this.player.health <= 0 ) {
			endGame();
		}
		else if( this.player.health < 3 ) {
			healthTarget.style.color = 'red';
		}
	}

	changeMap() {

		msgTarget.innerHTML += 'You wander into new lands..<br>';
		switch(this.direction) {
			case 'left':
			this.mapOffsetX --;
			this.playerX = 15;
			break;
			case 'right':
			this.mapOffsetX ++;
			this.playerX = 0;
			break;
			case 'up':
			this.mapOffsetY --;
			this.playerY = 15;
			break;
			case 'down':
			this.mapOffsetY ++;
			this.playerY = 0;
			break;
		}
		this.direction='';

		this.rng = new Math.seedrandom(this.mapOffsetX * this.mapOffsetY);
		this.seed = this.rng();
		this.map = new Map(this.seed);
		this.update();

	}

	updateSurround() {
		if( this.playerX > 0 ){
			this.tileLeft = this.map.tileMap[this.playerX -1][this.playerY];
		}
		else {
			this.tileLeft = new Tile('edge');
		}

		if( this.playerX < 15 ) {
			this.tileRight = this.map.tileMap[this.playerX +1][this.playerY];
		}
		else {
			this.tileRight = new Tile('edge');
		}

		if( this.playerY > 0 ){
			this.tileAbove = this.map.tileMap[this.playerX][this.playerY -1];
		}
		else {
			this.tileAbove = new Tile('edge');
		}

		if( this.playerY < 15 ) {
			this.tileBelow = this.map.tileMap[this.playerX][this.playerY +1];	
		}
		else {
			this.tileBelow = new Tile('edge');
		}
	}
}
