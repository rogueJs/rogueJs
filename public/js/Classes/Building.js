"use strict";

class Building {
  constructor(w, h) {
    this.w = w;
    this.h = h;

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
      let i = Math.floor(Math.random() * this.h);
      let j = Math.floor(Math.random() * this.w); 

      if (this.map[i][j] == 0) {
        this.map[i][j] = 1 ;
        wallsLeftToplace--;
      }
    }
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

