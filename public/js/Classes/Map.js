"use strict";

class Map {

	constructor(seed) {

		var xMax = 16;
		var yMax= 16;
		/* Create outher array*/
		this.tileMap = new Array(xMax);

		/* Create inner arrays*/
		for( var i = 0; i < xMax; i++ ) {
			this.tileMap[i] = new Array(yMax);
		}

		/* Populate every spot with a tile */
		for( var x = 0; x < xMax; x++ ) {
			for( var y = 0; y < yMax; y++ ) {
				this.tileMap[x][y] = new Tile(randomType( seed, x, y  ) );
			}
		}
	}
	
	draw() {
		for( var x = 0, length = this.tileMap.length;x < length; x++ ) {
			for( var y = 0; y < length; y++ ) {
				this.tileMap[x][y].draw(x * 25, y * 25);	
			}
		}
	}
}

