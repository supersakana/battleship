import Board from './board';
import Ship from './ship';
import { displayShip } from './dom';

/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */

export default class Player {
  constructor(isCpu = false) {
    this.isCpu = isCpu;
    this.board = new Board();
    this.ships = this.#createShips();
  }

  randomize() {
    const direction = this.#randomDirection();
    this.ships.forEach((ship) => {
      ship.isVerti = direction;
      this.board.placeShip(ship, '01', displayShip);
    });
  }

  #createShips(ships = []) {
    const lengths = [5];

    lengths.forEach((num) => {
      ships.push(new Ship(num));
    });
    return ships;
  }

  #randomDirection() {
    return [true, false][Math.floor(((Math.random()) * 2))];
  }
}
