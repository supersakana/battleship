import Player from '../src/lib/player';

/* eslint-disable no-undef */

describe('makeGuess', () => {
  test('takes a coord of hit ship and returns array of coords to hit next', () => {
    const cpu = new Player('cpu');
    const result = cpu.makeGuess('32');
    expect(result).toEqual(['31', '42', '33', '22']);
  });

  test('returns array of coords within board parameters', () => {
    const cpu = new Player('cpu');
    const result = cpu.makeGuess('94');
    expect(result).toEqual(['93', '95', '84']);
  });

  test('returns array of coords excluding cells that have been hit', () => {
    // test here
  });
});
