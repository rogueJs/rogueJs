"use strict";

function populateTileMap() {

	var xMax = 16;
	var yMax= 16;

/* Create outher array*/
	var tileMap = new Array(xMax);

/* Create inner arrays*/

	for( var i = 0; i < xMax; i++ ) {
		tileMap[i] = new Array(yMax);
	}

/* Populate every spot with a tile */
	for( var x = 0; x < xMax; x++ ) {
		for( var y = 0; y < yMax; y++ ) {
			tileMap[x][y] = new Tile(randomColor());
			// tileMap[x][y] = new Tile(randomTile());

		}
	}

	return tileMap;
}