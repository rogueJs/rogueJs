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
		}

		this.validateMove = function() {
			switch(this.direction) {
				case 'left':
					if( !this.tileLeft.colidable ) {
						this.playerX --;
					}
					break;
				case 'right':
					if( !this.tileRight.colidable ) {
						this.playerX ++;
					}
					break;
				case 'up':
					if( !this.tileAbove.colidable ) {
						this.playerY --;
					}
					break;
				case 'down':
					if( !this.tileBelow.colidable ) {
						this.playerY ++;
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
	}
}