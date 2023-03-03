/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable class-methods-use-this */

export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.isVerti = true;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.length === this.hits;
  }

  combo(combo) {
    const axis = this.isVerti ? 1 : 10;
    for (let i = 0; i < (this.length - 1); i++) {
      let coord = `${parseInt(combo[combo.length - 1]) + axis}`;

      if (coord.length < 2) coord = `0${coord}`;

      combo.push(coord);
    }
    return combo;
  }
}
