import Board from './board';

/* eslint-disable class-methods-use-this */

export default class Player {
  constructor(isCpu = false) {
    this.isCpu = isCpu;
    this.board = this.setUpBoard();
  }

  setUpBoard() {
    const board = new Board();
    return board;
  }
}
