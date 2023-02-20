import Board from '../src/js/board';
/* eslint-disable */


// create a ship mock obj for place ship
test('placeShip', () => {
  const board = new Board();
  const ship = {}
  board.placeShip(ship)
  expect(board.cells).toEqual(ship); // expects the board on placed position to equal ship mock
});

/* eslint-enable */
