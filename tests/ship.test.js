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
  test('returns [01, 02, 03], vertical ship, length of 3, 01 coord', () => {
    const ship = new Ship(3);
    const result = ship.combo(['01']);
    expect(result).toEqual(['01', '02', '03']);
  });

  test('returns [01, 11, 21], horizontal ship, length of 3, 01 coord', () => {
    const ship = new Ship(3);
    ship.isVerti = false;
    const result = ship.combo(['01']);
    expect(result).toEqual(['01', '11', '21']);
  });

  test('returns combo outside of board proximity (vertical)', () => {
    const ship = new Ship(3);
    const result = ship.combo(['99']);
    expect(result).toEqual(['99', '100', '101']);
  });

  test('returns combo outside of board proximity (horizontal)', () => {
    const ship = new Ship(3);
    ship.isVerti = false;
    const result = ship.combo(['99']);
    expect(result).toEqual(['99', '109', '119']);
  });

  test('returns [30, 31, 32, 33, 34], vertical ship, length of 5, 30 coord', () => {
    const ship = new Ship(5);
    const result = ship.combo(['30']);
    expect(result).toEqual(['30', '31', '32', '33', '34']);
  });

  test('returns [30, 40, 50, 60, 70], horizontal ship, length of 5, 30 coord', () => {
    const ship = new Ship(5);
    ship.isVerti = false;
    const result = ship.combo(['30']);
    expect(result).toEqual(['30', '40', '50', '60', '70']);
  });
});
