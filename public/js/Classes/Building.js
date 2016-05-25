"use strict";

class Building {
    constructor(seed, w = 3, h = 2) {
        this.w = w;
        this.h = h;
        this.rng = new Math.seedrandom(seed);

        //initialize the map
        this.map = new Array(this.h);
        for (var i = 0, len = this.map.length; i < len; i++) {
            this.map[i] = new Array(this.w);
        }

        //fill it with zeros
        for (var i = 0, len = this.map.length; i < len; i++) {
            for (var j = 0, lan = this.map[i].length; j < lan; j++) {
                this.map[i][j] = 0;
            }
        }

        // Place walls
        let ammountOfWalls = Math.max(this.w, this.h) + 1;
        let wallsLeftToplace = ammountOfWalls;

        while (wallsLeftToplace > 0 ){
            // get a random coordinate
            let i = Math.floor(this.rng(wallsLeftToplace) * this.h);
            let j = Math.floor(this.rng(wallsLeftToplace) * this.w); 

            if (this.map[i][j] == 0) {
                this.map[i][j] = 1 ;
                wallsLeftToplace--;
            }
        }
    }

    scaleTo(scale) {
        // make a square array to hold our building
        var square = new Array(scale);
        for (var i = 0, len = square.length; i < len; i++) {
            square[i] = new Array(scale);
        }

        // fill it with 0
        for (var i = 0, len = square.length; i < len; i++) {
            for (var j = 0, lan = square[i].length; j < lan; j++) {
                square[i][j] = 0;
            }
        }

        for (var i = 0, len = square.length; i < len; i++) {
            for (var j = 0, lan = square[i].length; j < lan; j++) {

                let iInSmall = Math.floor((i / square.length) * this.map.length);
                let jInSmall = Math.floor((j / square.length) * this.map[0].length);

                if (this.map[iInSmall][jInSmall] == 1){
                    square[i][j] = 1;
                }
            }
        }

        return square;
    } 

    logBuilding() {
        for (var x = 0, len = this.map.length ; x < len; x++) {
            let row = '';
            for (var y = 0, lan = this.map[x].length; y < lan; y++) {
                row += this.map[x][y];
            }
            console.log(row);
        }
    }
}

