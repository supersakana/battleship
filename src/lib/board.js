import { displayShip } from './dom';

/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable class-methods-use-this */

export default class Board {
  constructor() {
    this.at = this.#generateCells();
  }

  placeShip(ship, cell, display = displayShip) {
    const coord = cell.split('').map((c) => parseInt(c));

    if (ship.isVerti) {
      this.#axisY(ship, coord, display);
    } else {
      this.#axisX(ship, coord, display);
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

  randomCoord() {
    const vaccantCells = Object.keys(this.at).sort().filter((cell) => this.at[cell].ship == null);
    console.log(this.at);
    return vaccantCells;
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

  #axisX(ship, coord, display) {
    for (let y = coord[1]; y < (ship.length + coord[1]); y++) {
      const cell = `${coord[0]}${y}`;
      this.at[cell].ship = ship;
      display(cell);
    }
  }

  #axisY(ship, coord, display) {
    for (let x = coord[0]; x < (ship.length + coord[0]); x++) {
      const cell = `${x}${coord[1]}`;
      this.at[cell].ship = ship;
      display(cell);
    }
  }

  #isOpenTarget(cell) {
    return cell.ship != null && cell.hit === false;
  }
}
