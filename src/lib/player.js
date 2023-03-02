import Board from './board';
import Ship from './ship';

/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */

export default class Player {
  constructor(isCpu = false) {
    this.isCpu = isCpu;
    this.board = new Board();
    this.ships = this.#createShips();
  }

  randomize(direction = this.#randomDirection(), coord = this.#randomCoord()) {
    const id = this.isCpu ? 'cpu' : 'human';

    this.ships.forEach((ship) => {
      ship.isVerti = direction;
      this.board.placeShip(ship, coord, id);
    });
  }

  #createShips(ships = []) {
    const lengths = [5, 4, 3, 3, 2];

    lengths.forEach((num) => {
      ships.push(new Ship(num));
    });
    return ships;
  }

  #randomDirection() {
    return [true, false][Math.floor(((Math.random()) * 2))];
  }

  #randomCoord(ship) {
    const coords = this.board.validCells(ship);
    return coords[Math.floor(((Math.random()) * coords.length))];
  }
}
