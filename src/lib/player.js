import Board from './board';
import Ship from './ship';

/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */

export default class Player {
  constructor() {
    this.board = new Board();
    this.ships = this.createShips();
  }

  randomize() {
    this.ships.forEach((ship) => {
      ship.isVerti = this.#randomDirection();
      const coord = this.#randomCoord(ship);

      this.board.placeShip(ship, coord, this.type());
    });
  }

  createShips(ships = []) {
    const lengths = [5, 4, 3, 3, 2];
    lengths.forEach((num) => ships.push(new Ship(num)));
    return ships;
  }

  type() {
    return this.constructor.name.toLowerCase();
  }

  sample(array) {
    return array[Math.floor(((Math.random()) * array.length))];
  }

  // private

  #randomDirection() {
    return this.sample([true, false]);
  }

  #randomCoord(ship) {
    return this.sample(this.board.validCells(ship));
  }
}
