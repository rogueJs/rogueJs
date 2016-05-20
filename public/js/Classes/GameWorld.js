"use strict";
class GameWorld {

	constructor() {

		this.map = new Map();
		this.player = new Player();
		this.playerX = 3;
		this.playerY = 14;
		this.direction = '';
		this.tileCurrent = this.map.tileMap[this.playerX][this.playerY];	

		this.update = function() {
			if( this.playerX > 0 ){
				this.tileLeft = this.map.tileMap[this.playerX -1][this.playerY];
			}
			else {
				this.tileLeft = new Tile('brick');
			}

			if( this.playerX < 15 ) {
				this.tileRight = this.map.tileMap[this.playerX +1][this.playerY];
			}
			else {
				this.tileRight = new Tile('brick');
			}

			if( this.playerY > 0 ){
				this.tileAbove = this.map.tileMap[this.playerX][this.playerY -1];
			}
			else {
				this.tileAbove = new Tile('brick');
			}

			if( this.playerY < 15 ) {
				this.tileBelow = this.map.tileMap[this.playerX][this.playerY +1];	
			}
			else {
				this.tileBelow = new Tile('brick');
			}

			this.validateMove();
			this.discoverTile();			

			if( this.map.tileMap[this.playerX][this.playerY].item ) {
				var item = this.map.tileMap[this.playerX][this.playerY].item;
				this.player.equip(item.type);
				this.map.tileMap[this.playerX][this.playerY].item = null;
			}
		}

		this.validateMove = function() {
			switch(this.direction) {
				case 'left':
					if( !this.tileLeft.colidable ) {
						this.playerX --;
					}
					else if( this.tileLeft.enemy ) {
						this.resolveBattle(this.tileLeft.enemy, this.tileLeft);
					}
					break;
				case 'right':
					if( !this.tileRight.colidable ) {
						this.playerX ++;
					}
					else if( this.tileRight.enemy ) {
						this.resolveBattle(this.tileRight.enemy, this.tileRight);
					}
					break;
				case 'up':
					if( !this.tileAbove.colidable ) {
						this.playerY --;
					}
					else if( this.tileAbove.enemy ) {
						this.resolveBattle(this.tileAbove.enemy, this.tileAbove);
					}
					break;
				case 'down':
					if( !this.tileBelow.colidable ) {
						this.playerY ++;
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

		this.discoverTile = function() {
			this.tileLeft.discovered = true;
			this.tileRight.discovered = true;
			this.tileAbove.discovered = true;
			this.tileBelow.discovered = true;
			this.tileCurrent.discovered = true;
		}

		this.resolveBattle = function(enemy, tile) {
			
			this.player.battleStrength = this.player.level + this.player.strength;

			console.log(this.player.battleStrength);
			console.log(enemy.strength);

			if( this.player.equipped.indexOf('sword') != -1  && this.player.battleStrength > enemy.strength ) {
				tile.colidable = false;
				tile.enemy = null;
				// this.player.experience += Math.floor(enemy.strength / 2);
				// this.player.level = (Math.floor(this.player.experience / 10));
			}
		}
	}
}