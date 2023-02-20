export default class Board {
  constructor() {
    this.cells = this.#generateCells();
  }

  placeShip() {
    this.cells;
  }

  //   private

  #generateCells() { // eslint-disable-line
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const coords = {};
    nums.forEach((x) => {
      nums.forEach((y) => { coords[[x, y]] = null; });
    });
    return coords;
  }
}
