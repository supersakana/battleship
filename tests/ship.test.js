import Ship from '../src/lib/ship';

/* eslint-disable no-undef */

describe('hit', () => {
  test('increments ship hits by 1', () => {
    const ship = new Ship(4);
    ship.hit();
    expect(ship.hits).toEqual(1);
  });
});

describe('isSunk', () => {
  test('isSunk returns true if hits equals length', () => {
    const ship = new Ship(1);
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });

  test('isSunk returns false if hits does not equal length', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
  });
});

describe('combo', () => {
  test('returns [01, 02, 03], horizontal ship, length of 3, 01 coord', () => {
    const ship = new Ship(3);
    ship.isVerti = false;
    const result = ship.combo(['01']);
    expect(result).toEqual(['01', '02', '03']);
  });
});
