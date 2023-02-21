import Player from './player';

/* eslint-disable class-methods-use-this */

export default class Game {
  constructor() {
    this.players = [];
  }

  start() {
    this.setup();// set up players and gameboards
    console.log(this.players);
  }

  setup() {
    const human = new Player();
    const cpu = new Player(true);
    this.players.push(human, cpu);
  }
}
