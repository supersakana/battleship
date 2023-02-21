/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable class-methods-use-this */

export default class Board {
  constructor() {
    this.at = this.#generateCells();
  }

  placeShip(ship, cell) {
    const coord = cell.split('').map((c) => parseInt(c));

    if (ship.isVerti) {
      this.#axisY(ship, coord);
    } else {
      this.#axisX(ship, coord);
    }
  }

  receiveAttack(cell) {
    const target = this.at[cell];

    if (target.ship != null) target.ship.hit();

    target.hit = true;
  }

  noMoreShips() {
    const shipCells = Object.values(this.at).filter(this.#isOpenTarget);
    return shipCells.length === 0;
  }

  //   private

  #generateCells() {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const cells = {};
    nums.forEach((x) => {
      nums.forEach((y) => {
        cells[`${x}${y}`] = { ship: null, hit: false };
      });
    });
    return cells;
  }

  #axisY(ship, coord) {
    for (let y = coord[1]; y < (ship.length + coord[1]); y++) {
      this.at[`${coord[0]}${y}`].ship = ship;
    }
  }

  #axisX(ship, coord) {
    for (let x = coord[0]; x < (ship.length + coord[0]); x++) {
      this.at[`${x}${coord[1]}`].ship = ship;
    }
  }

  #isOpenTarget(cell) {
    return cell.ship != null && cell.hit === false;
  }
}
