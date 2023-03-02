import Board from '../src/lib/board';
import Ship from '../src/lib/ship';

/* eslint-disable no-undef */

describe('placeShip', () => {
  test('places a verticle ship 3 cells length', () => {
    const board = new Board();
    const ship = new Ship(3);
    ship.isVerti = false;
    const mockDisplay = jest.fn();
    board.placeShip(ship, '34', 'human', mockDisplay);

    expect(board.at['34'].ship).toEqual(ship);
    expect(board.at['44'].ship).toEqual(ship);
    expect(board.at['54'].ship).toEqual(ship);
  });

  test('places a horizontal ship 3 cells length', () => {
    const board = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    board.placeShip(ship, '57', 'human', mockDisplay);

    expect(board.at['57'].ship).toEqual(ship);
    expect(board.at['58'].ship).toEqual(ship);
    expect(board.at['59'].ship).toEqual(ship);
  });
});

describe('receiveAttack', () => {
  test('hits target if no ship', () => {
    const board = new Board();
    board.receiveAttack('87');

    expect(board.at['87'].hit).toEqual(true);
  });

  test('hits target if ship included', () => {
    const board = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    board.placeShip(ship, '40', 'human', mockDisplay);
    board.receiveAttack('40');

    expect(board.at['40'].ship.hits).toEqual(1);
    expect(board.at['40'].hit).toEqual(true);
  });
});

describe('noMoreShips', () => {
  test('returns true if there are no more ships', () => {
    const board = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    board.placeShip(ship, '40', 'human', mockDisplay);
    board.receiveAttack('40');
    board.receiveAttack('41');
    board.receiveAttack('42');

    expect(board.noMoreShips()).toBeTruthy();
  });

  test('returns false if there are still ships', () => {
    const board = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    board.placeShip(ship, '40', 'human', mockDisplay);

    expect(board.noMoreShips()).toBeFalsy();
  });

  test('returns false if ship is hit but still open', () => {
    const board = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    board.placeShip(ship, '40', 'human', mockDisplay);
    board.receiveAttack('40');

    expect(board.noMoreShips()).toBeFalsy();
  });
});
