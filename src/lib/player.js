import Board from './board';
import Ship from './ship';

/* eslint-disable class-methods-use-this */

export default class Player {
  constructor(isCpu = false) {
    this.isCpu = isCpu;
    this.board = new Board();
    this.ships = this.#createShips();
  }

  randomize() {

  }

  #createShips() {
    const lengths = [5, 4, 3, 3, 2];
    const ships = [];

    lengths.forEach((num) => {
      ships.push(new Ship(num));
    });
    return ships;
  }
}
