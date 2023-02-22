import Player from './player';
import { displayBoard } from './dom';

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
    const cpu = new Player(true);
    this.players.push(human, cpu);

    displayBoard(human.board, '#human');
    displayBoard(cpu.board, '#cpu');
  }
}
