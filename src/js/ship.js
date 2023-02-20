export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.isVerti = true; // true if verticle, false if horizontal
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.length === this.hits;
  }
}
