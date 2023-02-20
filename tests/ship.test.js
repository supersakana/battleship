import Ship from '../src/js/ship';
/* eslint-disable */

test('hit subtracts the length by 1', () => {
  const ship = new Ship(4);
  ship.hit()
  expect(ship.hits).toEqual(1);
});

test('isSunk returns true if hits equals length', () => {
    const ship = new Ship(1)
    ship.hit()
    expect(ship.isSunk()).toBeTruthy();
});

test('isSunk returns false if hits does not equal length', () => {
    const ship = new Ship(3)
    ship.hit()
    expect(ship.isSunk()).toBeFalsy();
});

/* eslint-enable */
