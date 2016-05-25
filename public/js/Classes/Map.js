"use strict";

class Map {

<<<<<<< HEAD
    constructor(seed) {
        this.xMax = 16;
        this.yMax= 16;
        this.rng = new Math.seedrandom(seed);

        /* Create outer array*/
        this.tileMap = new Array(this.xMax);

        /* Create inner arrays*/
        for( var i = 0; i < this.xMax; i++ ) {
            this.tileMap[i] = new Array(this.yMax);
        }

        /* Populate every spot with a tile */
        for( var x = 0; x < this.xMax; x++ ) {
            for( var y = 0; y < this.yMax; y++ ) {
                this.tileMap[x][y] = new Tile(randomType( seed, x, y  ) );
            }
        }

        // create a buildings in every corner of the map
        this.placeBuilding(3, 2, 4, 1, 1);
        this.placeBuilding(3, 2, 4, 10, 1);
        this.placeBuilding(3, 2, 4, 10, 10);
        this.placeBuilding(3, 2, 4, 1, 10);
    }

    placeBuilding(horComplexity, vertComplexity, size, x, y) {
        var building = new Building(this.rng(), horComplexity, vertComplexity);
        var buildingMap = building.scaleTo(size);

        for( var i = 0; i < this.xMax; i++ ) {
            if (buildingMap[i]){
                for( var j = 0; j < this.yMax; j++ ) {
                    if (buildingMap[i][j] && buildingMap[i][j] == 1) {
                        this.tileMap[i + x][j + y] = new Tile('brick');
                    }
                }
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

