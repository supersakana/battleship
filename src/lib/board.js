import { displayShip } from './dom';
import { isValid } from './validate';

/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable class-methods-use-this */

export default class Board {
  constructor() {
    this.at = this.#generateCells();
  }

  placeShip(ship, cell, display = displayShip) {
    ship.combo([cell]).forEach((xy) => {
      this.at[xy].ship = ship;
      display(xy);
    });
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

  randomCoord(ship) {
    const vaccantCells = Object.keys(this.at).sort().filter((cell) => this.at[cell].ship == null);
    const validCells = [];

    vaccantCells.forEach((cell) => {
      const combo = ship.combo([cell]);
      if (isValid(combo)) {
        validCells.push(cell);
      }
      validCells.push(combo);
    });
    // return validPlacement after iterations
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

  #isOpenTarget(cell) {
    return cell.ship != null && cell.hit === false;
  }
}
