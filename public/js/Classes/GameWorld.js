"use strict";
class GameWorld {

	constructor() {

		this.map = new Map();
		this.player = new Player();
		
		this.playerX = 3;
		this.playerY = 14;

		this.direction = '';


		this.validateMove = function() {

			// console.log(this.map.tileMap[this.playerX][this.playerY]);
			if( this.playerX > 0 ){
				var tileLeft = this.map.tileMap[this.playerX -1][this.playerY];
			}
			else {
				var tileLeft = new Tile('brick');
			}

			if( this.playerX < 15 ) {
				var tileRight = this.map.tileMap[this.playerX +1][this.playerY];
			}
			else {
				var tileRight = new Tile('brick');
			}
			if( this.playerY > 0 ){
				var tileAbove = this.map.tileMap[this.playerX][this.playerY -1];
			}
			else {
				var tileAbove = new Tile('brick');
			}

			if( this.playerY < 15 ) {
				var tileBelow = this.map.tileMap[this.playerX][this.playerY +1];
				
			}
			else {
				var tileBelow = new Tile('brick');
			}


			switch(this.direction) {
				case 'left':
					if( !tileLeft.colidable ) {
						this.playerX --;
					}
					break;
				case 'right':
					if( !tileRight.colidable ) {
						this.playerX ++;
					}
					break;
				case 'up':
					if( !tileAbove.colidable ) {
						this.playerY --;
					}
					break;
				case 'down':
					if( !tileBelow.colidable ) {
						this.playerY ++;
					}
					break;
				default:
					break;

			}

			// if( this.direction != '') {
				// console.log(tileAbove.type);
				// console.log(tileBelow.type);
				// console.log(tileLeft.type);
				// console.log(tileRight.type);
			// }
			this.direction = '';


			
		}






		
	}
}