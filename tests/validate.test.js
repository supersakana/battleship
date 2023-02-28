import { isValid } from '../src/lib/validate';
import Board from '../src/lib/board';
import Ship from '../src/lib/ship';

/* eslint-disable no-undef */

describe('isValid', () => {
  test('true for combos that are on the same y axis', () => {
    const board = new Board();
    const combo = ['22', '23', '24'];
    const ship = { isVerti: true };
    expect(isValid(combo, ship, board)).toBeTruthy();
  });

  test('true for combos that are on the same x axis', () => {
    const board = new Board();
    const combo = ['24', '34', '44'];
    const ship = { isVerti: false };
    expect(isValid(combo, ship, board)).toBeTruthy();
  });

  test('false for combos that have different x value', () => {
    const board = new Board();
    const combo = ['28', '29', '30'];
    const ship = { isVerti: true };
    expect(isValid(combo, ship, board)).toBeFalsy();
  });

  test('false for combos that exceed board parameters', () => {
    const board = new Board();
    const combo = ['80', '90', '100'];
    const ship = { isVerti: false };
    expect(isValid(combo, ship, board)).toBeFalsy();
  });

  test('false for combos that contain ship placement', () => {
    const board = new Board();
    const placedShip = new Ship(3);
    const ship = { isVerti: false };
    const mockDisplay = jest.fn();
    board.placeShip(placedShip, '24', mockDisplay);

    const combo = ['24', '34', '44'];
    expect(isValid(combo, ship, board)).toBeFalsy();
  });
});
