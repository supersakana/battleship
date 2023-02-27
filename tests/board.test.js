import Board from '../src/lib/board';
import Ship from '../src/lib/ship';

/* eslint-disable no-undef */

describe('placeShip', () => {
  test('places a verticle ship 3 cells length', () => {
    const board = new Board();
    const ship = { length: 3, isVerti: false };
    const mockDisplay = jest.fn();
    board.placeShip(ship, '34', mockDisplay);

    expect(board.at['34'].ship).toEqual(ship);
    expect(board.at['35'].ship).toEqual(ship);
    expect(board.at['36'].ship).toEqual(ship);
  });

  test('places a horizontal ship 3 cells length', () => {
    const board = new Board();
    const ship = { length: 3, isVerti: true };
    const mockDisplay = jest.fn();
    board.placeShip(ship, '57', mockDisplay);

    expect(board.at['57'].ship).toEqual(ship);
    expect(board.at['67'].ship).toEqual(ship);
    expect(board.at['77'].ship).toEqual(ship);
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
    board.placeShip(ship, '40', mockDisplay);
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
    board.placeShip(ship, '40', mockDisplay);
    board.receiveAttack('40');
    board.receiveAttack('50');
    board.receiveAttack('60');

    expect(board.noMoreShips()).toBeTruthy();
  });

  test('returns false if there are still ships', () => {
    const board = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    board.placeShip(ship, '40', mockDisplay);

    expect(board.noMoreShips()).toBeFalsy();
  });

  test('returns false if ship is hit but still open', () => {
    const board = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    board.placeShip(ship, '40', mockDisplay);
    board.receiveAttack('40');

    expect(board.noMoreShips()).toBeFalsy();
  });
});

// randomCoord will return a valid random coordinate, testing parts of the function little by little
describe('randomCoord', () => {
  test('returns a list of coords without ship', () => {
    const board = new Board();
    const ship = new Ship(3);
    const mockDisplay = jest.fn();
    board.placeShip(ship, '02', mockDisplay);
    const result = [
      '00',
      '01',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
      '33',
      '34',
      '35',
      '36',
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '51',
      '52',
      '53',
      '54',
      '55',
      '56',
      '57',
      '58',
      '59',
      '60',
      '61',
      '62',
      '63',
      '64',
      '65',
      '66',
      '67',
      '68',
      '69',
      '70',
      '71',
      '72',
      '73',
      '74',
      '75',
      '76',
      '77',
      '78',
      '79',
      '80',
      '81',
      '82',
      '83',
      '84',
      '85',
      '86',
      '87',
      '88',
      '89',
      '90',
      '91',
      '92',
      '93',
      '94',
      '95',
      '96',
      '97',
      '98',
      '99',
    ];

    expect(board.randomCoord()).toEqual(result);
  });
});
