import Board from './board';
import Ship from './ship';
import { isValidGuess } from './validate';

/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable no-plusplus */

export default class Player {
  constructor(type = 'human') {
    this.type = type;
    this.board = new Board();
    this.ships = this.#createShips();
    // below is cpu only...
    this.guesses = [];
    this.lastHit = null;
  }

  randomize() {
    this.ships.forEach((ship) => {
      ship.isVerti = this.#randomDirection();
      const coord = this.#randomCoord(ship);

      this.board.placeShip(ship, coord, this.type);
    });
  }

  // for cpu only, board is the foe's board, only gets called when a ship hit is made
  setGuesses(coord, board) {
    this.lastHit = coord;
    const shifts = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    for (let i = 0; i < shifts.length; i++) {
      const guess = this.#createGuess(coord, shifts[i]);
      if (isValidGuess(guess, board)) this.guesses.push(guess);
    }
  }

  // private

  #createShips(ships = []) {
    const lengths = [5, 4, 3, 3, 2];

    lengths.forEach((num) => {
      ships.push(new Ship(num));
    });
    return ships;
  }

  #createGuess(coord, shift) {
    const xy = coord.split('').map((no) => parseInt(no));
    return `${xy[0] + shift[0]}${xy[1] + shift[1]}`;
  }

  #filterGuesses(coord) {
    if (coord[1] === this.lastHit[1]) {
      this.guesses = this.guesses.filter();
    }
  }

  #randomDirection() {
    return [true, false][Math.floor(((Math.random()) * 2))];
  }

  #randomCoord(ship) {
    const coords = this.board.validCells(ship);
    return coords[Math.floor(((Math.random()) * coords.length))];
  }
}
