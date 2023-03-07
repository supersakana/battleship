import { displayShip, displayHit } from './dom';
import { isValidPlacement } from './validate';

/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable class-methods-use-this */

export default class Board {
  constructor() {
    this.at = this.#generateCells();
  }

  placeShip(ship, cell, id, display = displayShip) {
    ship.combo([cell]).forEach((xy) => {
      this.at[xy].ship = ship;
      display(xy, id);
    });
  }

  receiveAttack(cell, id, display = displayHit) {
    const target = this.at[cell];

    if (target.ship != null) target.ship.hit();

    target.hit = true;
    display(`${id}-${cell}`, target);
  }

  noMoreShips() {
    const shipCells = Object.values(this.at).filter(this.#isOpenTarget);
    return shipCells.length === 0;
  }

  validCells(ship) {
    const validCells = this.#vaccantCells().filter((cell) => {
      const combo = ship.combo([cell]);
      return isValidPlacement(combo, ship, this);
    });
    return validCells;
  }

  hitlessCells() {
    return Object.keys(this.at).filter((cell) => this.at[cell].hit === false);
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

  #vaccantCells() {
    return Object.keys(this.at).sort().filter((cell) => this.at[cell].ship == null);
  }
}
