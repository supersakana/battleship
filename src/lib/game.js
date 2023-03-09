import Player from './player';
import Cpu from './cpu';
import { displayBoard, displayWinner, clickHit } from './dom';

/* eslint-disable class-methods-use-this */

export default class Game {
  constructor() {
    this.p1 = null;
    this.p2 = null;
  }

  start() {
    this.setup();
  }

  setup() {
    this.p1 = new Player();
    this.p2 = new Cpu();

    displayBoard(this.p1);
    displayBoard(this.p2);
    clickHit(this);

    this.p1.randomize();
    this.p2.randomize();
  }

  playRound(cell) {
    this.p1.attack(this.p2, cell);
    if (this.p2.board.noMoreShips()) {
      displayWinner(this.p1);
    } else {
      this.p2.attack(this.p1);
      if (this.p1.board.noMoreShips()) displayWinner(this.p2);
    }
  }
}
