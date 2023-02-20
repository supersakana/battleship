import Board from '../src/js/board';
/* eslint-disable */

test('placeShip places a verticle ship 3 cells length', () => {
  const board = new Board();
  const ship = {length: 3, isVerti: true}
  board.placeShip(ship, '34')
  expect(board.cells['34']).toEqual(ship);
  expect(board.cells['35']).toEqual(ship);
  expect(board.cells['36']).toEqual(ship);
});

test('placeShip places a horizontal ship 3 cells length', () => {
    const board = new Board();
    const ship = {length: 3, isVerti: false}
    board.placeShip(ship, '57')
    expect(board.cells['57']).toEqual(ship);
    expect(board.cells['67']).toEqual(ship);
    expect(board.cells['77']).toEqual(ship);
  });

/* eslint-enable */
