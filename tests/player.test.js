import Player from '../src/lib/player';
import Board from '../src/lib/board';
import Ship from '../src/lib/ship';

/* eslint-disable no-undef */

describe('setGuesses', () => {
  test('takes a coord of hit ship and returns array of coords to hit next', () => {
    const cpu = new Player('cpu');
    const foeBoard = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    foeBoard.placeShip(ship, '32', 'human', mockDisplay);
    cpu.setGuesses('32', foeBoard);
    expect(cpu.guesses).toEqual(['31', '42', '33', '22']);
  });

  test('returns array of coords within board parameters', () => {
    const cpu = new Player('cpu');
    const foeBoard = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    foeBoard.placeShip(ship, '94', 'human', mockDisplay);
    cpu.setGuesses('94', foeBoard);
    expect(cpu.guesses).toEqual(['93', '95', '84']);
  });

  test('returns array of coords within board parameters (corner)', () => {
    const cpu = new Player('cpu');
    const foeBoard = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    foeBoard.placeShip(ship, '00', 'human', mockDisplay);
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

  test('returns filtered guesses if hit pattern is vertical', () => {
    const cpu = new Player('cpu');
    const foeBoard = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    foeBoard.placeShip(ship, '14', 'human', mockDisplay);
    foeBoard.receiveAttack('14', 'human', mockDisplay);
    cpu.setGuesses('14', foeBoard);
    foeBoard.receiveAttack('15', 'human', mockDisplay);
    cpu.guesses.splice(cpu.guesses.indexOf('15'), 1); // temporary
    cpu.setGuesses('15', foeBoard);

    expect(cpu.guesses).toEqual(['13', '16']);
    expect(cpu.lastHit).toEqual('15');
  });

  test('returns filtered guesses if hit pattern is horizontal', () => {
    const cpu = new Player('cpu');
    const foeBoard = new Board();
    const ship = new Ship(3);
    ship.isVerti = false;
    const mockDisplay = jest.fn();
    foeBoard.placeShip(ship, '53', 'human', mockDisplay);
    foeBoard.receiveAttack('53', 'human', mockDisplay);
    cpu.setGuesses('53', foeBoard);
    foeBoard.receiveAttack('63', 'human', mockDisplay);
    cpu.guesses.splice(cpu.guesses.indexOf('63'), 1); // temporary
    cpu.setGuesses('63', foeBoard);

    expect(cpu.guesses).toEqual(['43', '73']);
    expect(cpu.lastHit).toEqual('63');
  });

  test('once a ship is sunk, the guesses and last hit are set to null', () => {
    const cpu = new Player('cpu');
    const foeBoard = new Board();
    const ship = new Ship(2);
    const mockDisplay = jest.fn();
    foeBoard.placeShip(ship, '71', 'human', mockDisplay);
    foeBoard.receiveAttack('71', 'human', mockDisplay);
    foeBoard.receiveAttack('72', 'human', mockDisplay);
    cpu.setGuesses('72', foeBoard);

    expect(ship.isSunk).toBeTruthy();
    expect(cpu.guesses).toEqual([]);
    expect(cpu.lastHit).toEqual(null);
  });
});
