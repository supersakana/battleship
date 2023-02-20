import Board from '../src/js/board';
import Ship from '../src/js/ship';

/* eslint-disable no-undef */

describe('placeShip', () => {
  test('places a verticle ship 3 cells length', () => {
    const board = new Board();
    const ship = { length: 3, isVerti: true };
    board.placeShip(ship, '34');

    expect(board.at['34'].ship).toEqual(ship);
    expect(board.at['35'].ship).toEqual(ship);
    expect(board.at['36'].ship).toEqual(ship);
  });

  test('places a horizontal ship 3 cells length', () => {
    const board = new Board();
    const ship = { length: 3, isVerti: false };
    board.placeShip(ship, '57');

    expect(board.at['57'].ship).toEqual(ship);
    expect(board.at['67'].ship).toEqual(ship);
    expect(board.at['77'].ship).toEqual(ship);
  });
});

describe('receiveAttack', () => {
  test('receiveAttack hits target if no ship', () => {
    const board = new Board();
    board.receiveAttack('87');

    expect(board.at['87'].hit).toEqual(true);
  });

  test('receiveAttack hits target if ship included', () => {
    const board = new Board();
    const ship = new Ship(3);
    board.placeShip(ship, '40');
    board.receiveAttack('40');

    expect(board.at['40'].ship.hits).toEqual(1);
    expect(board.at['40'].hit).toEqual(true);
  });
});
