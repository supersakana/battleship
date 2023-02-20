/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable class-methods-use-this */

export default class Board {
  constructor() {
    this.cells = this.#generateCells();
  }

  placeShip(ship, cell) {
    const coord = cell.split('').map((c) => parseInt(c));

    if (ship.isVerti) {
      this.#axisY(ship, coord);
    } else {
      this.#axisX(ship, coord);
    }
  }

  //   private

  #generateCells() {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const coords = {};
    nums.forEach((x) => {
      nums.forEach((y) => { coords[`${x}${y}`] = null; });
    });
    return coords;
  }

  #axisY(ship, coord) {
    for (let y = coord[1]; y < (ship.length + coord[1]); y++) {
      this.cells[`${coord[0]}${y}`] = ship;
    }
  }

  #axisX(ship, coord) {
    for (let x = coord[0]; x < (ship.length + coord[0]); x++) {
      this.cells[`${x}${coord[1]}`] = ship;
    }
  }
}
