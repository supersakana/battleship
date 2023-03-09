import Player from './player';
import Cpu from './cpu';
import { displayBoard, displayWinner, clickHit } from './dom';

/* eslint-disable class-methods-use-this */

export default class Game {
  constructor() {
    this.players = [];
  }

  start() {
    this.setup();// set up players and gameboards
  }

  setup() {
    const human = new Player();
    const cpu = new Cpu();

    this.players.push(human, cpu);

    displayBoard(human);
    displayBoard(cpu);
    clickHit(this);

    human.randomize();
    cpu.randomize();
  }

  playRound(cell) {
    const p1 = this.players[0];
    const p2 = this.players[1];

    p1.attack(p2, cell);
    if (p2.board.noMoreShips()) {
      displayWinner(p1);
    } else {
      p2.attack(this.players[0]);
      if (p1.board.noMoreShips()) displayWinner(p2);
    }
  }
}
