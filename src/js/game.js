import Board from './board';

export default class Game {
  start() {  //eslint-disable-line
    const board = new Board();
    console.log(board.cells);
  }

  testFunction() { //eslint-disable-line
    return 'the test is working!';
  }
}
