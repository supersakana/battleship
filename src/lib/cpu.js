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
    const coord = this.#target(human);
    human.board.receiveAttack(coord, human.type());
    if (human.board.noMoreShips()) displayWinner(this);
    if (human.board.at[coord].ship != null) this.setGuesses(coord, human.board);
  }

  // foe's board, only gets called when a ship hit is made
  setGuesses(coord, board) {
    const shifts = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    shifts.forEach((shift) => this.#createGuess(coord, board, shift));
    this.#evaluate(coord, board);
  }

  // private

  #evaluate(coord, board) {
    if (this.lastHit != null) this.#filterGuesses(coord);
    if (board.at[coord].ship.isSunk()) {
      this.lastHit = null;
      this.guesses = [];
    } else {
      this.lastHit = coord;
    }
  }

  #target(human) {
    if (this.guesses.length === 0) return this.sample(human.board.hitlessCells());

    const coord = this.sample(this.guesses);
    this.guesses.splice(this.guesses.indexOf(coord), 1);
    return coord;
  }

  #createGuess(coord, board, shift) {
    const xy = coord.split('').map((no) => parseInt(no));
    const guess = `${xy[0] + shift[0]}${xy[1] + shift[1]}`;
    if (isValidGuess(guess, board)) this.guesses.push(guess);
  }

  #filterGuesses(coord) {
    const i = coord[0] === this.lastHit[0] ? 0 : 1;
    this.guesses = this.guesses.filter((guess) => guess[i] === coord[i]);
  }
}
