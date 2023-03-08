import Player from '../src/lib/player';
import Board from '../src/lib/board';
import Ship from '../src/lib/ship';

/* eslint-disable no-undef */

describe('setGuesses', () => {
  test('takes a coord of hit ship and returns array of coords to hit next', () => {
    const cpu = new Player('cpu');
    const foeBoard = new Board();
    cpu.setGuesses('32', foeBoard);
    expect(cpu.guesses).toEqual(['31', '42', '33', '22']);
  });

  test('returns array of coords within board parameters', () => {
    const cpu = new Player('cpu');
    const foeBoard = new Board();
    cpu.setGuesses('94', foeBoard);
    expect(cpu.guesses).toEqual(['93', '95', '84']);
  });

  test('returns array of coords within board parameters (corner)', () => {
    const cpu = new Player('cpu');
    const foeBoard = new Board();
    cpu.setGuesses('00', foeBoard);
    expect(cpu.guesses).toEqual(['10', '01']);
  });

  test('returns array of coords excluding cells that have been hit', () => {
    const cpu = new Player('cpu');
    const foeBoard = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    foeBoard.placeShip(ship, '25', 'human', mockDisplay);
    foeBoard.receiveAttack('15', 'human', mockDisplay);
    cpu.setGuesses('25', foeBoard);

    expect(cpu.guesses).toEqual(['24', '35', '26']);
  });
});
