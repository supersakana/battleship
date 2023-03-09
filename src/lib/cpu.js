import { isValidGuess } from './validate';
import { displayWinner } from './dom';
import Player from './player';

/* eslint-disable class-methods-use-this */
/* eslint-disable radix */
/* eslint-disable no-plusplus */

export default class Cpu extends Player {
  constructor() {
    super();
    this.guesses = [];
    this.lastHit = null;
  }

  attack(human) {
    const coord = this.#coord(human);
    human.board.receiveAttack(coord, human.type());
    if (human.board.noMoreShips()) displayWinner(this);
    if (human.board.at[coord].ship != null) this.setGuesses(coord, human.board);
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

  #coord(human) {
    if (this.guesses.length === 0) {
      return human.board.hitlessCells()[Math.floor(((Math.random()) * human.board.hitlessCells().length))]; //eslint-disable-line
    }
    const coord = this.guesses[Math.floor(((Math.random()) * this.guesses.length))];
    this.guesses.splice(this.guesses.indexOf(coord), 1);
    return coord;
  }

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
