import Player from '../src/lib/player';

/* eslint-disable no-undef */

describe('setGuesses', () => {
  test('takes a coord of hit ship and returns array of coords to hit next', () => {
    const cpu = new Player('cpu');
    cpu.setGuesses('32');
    expect(cpu.guesses).toEqual(['31', '42', '33', '22']);
  });

  test('returns array of coords within board parameters', () => {
    const cpu = new Player('cpu');
    cpu.setGuesses('94');
    expect(cpu.guesses).toEqual(['93', '95', '84']);
  });

  test('returns array of coords within board parameters (corner)', () => {
    const cpu = new Player('cpu');
    cpu.setGuesses('00');
    expect(cpu.guesses).toEqual(['10', '01']);
  });

//   test('returns array of coords excluding cells that have been hit', () => {
//     // test here
//   });
});
