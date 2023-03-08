import { isValidGuess } from './validate';
import Player from './player';

/* eslint-disable class-methods-use-this */
/* eslint-disable radix */
/* eslint-disable no-plusplus */

export default class Cpu extends Player {
  constructor() {
    super();
    this.guesses = [];
    this.lastHit = null;
    this.type = 'cpu';
  }

  // foe's board, only gets called when a ship hit is made
  setGuesses(coord, board) {
    const shifts = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    for (let i = 0; i < shifts.length; i++) {
      const guess = this.#createGuess(coord, shifts[i]);
      if (isValidGuess(guess, board)) this.guesses.push(guess);
    }
    if (this.lastHit != null) this.#filterGuesses(coord);
    this.lastHit = coord;
    if (board.at[coord].ship.isSunk()) {
      this.lastHit = null;
      this.guesses = [];
    }
  }

  // private

  #createGuess(coord, shift) {
    const xy = coord.split('').map((no) => parseInt(no));
    return `${xy[0] + shift[0]}${xy[1] + shift[1]}`;
  }

  #filterGuesses(coord) {
    if (coord[0] === this.lastHit[0]) {
      this.guesses = this.guesses.filter((guess) => guess[0] === coord[0]);
    } else {
      this.guesses = this.guesses.filter((guess) => guess[1] === coord[1]);
    }
  }
}
