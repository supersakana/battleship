import Player from './player';
import { displayBoard, clickHit } from './dom';

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
    const cpu = new Player('cpu');
    this.players.push(human, cpu);

    displayBoard(human);
    displayBoard(cpu);
    clickHit(cpu, human);

    human.randomize();
    cpu.randomize();
  }
}
