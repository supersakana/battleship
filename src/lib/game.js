import Player from './player';
import { displayBoard } from './dom';

/* eslint-disable class-methods-use-this */

export default class Game {
  constructor() {
    this.players = [];
  }

  start() {
    this.setup();// set up players and gameboards
    displayBoard(this.players[0].board, 'human');
    displayBoard(this.players[1].board, 'cpu');
  }

  setup() {
    const human = new Player();
    const cpu = new Player(true);
    this.players.push(human, cpu);
  }
}
