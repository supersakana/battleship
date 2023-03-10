import { isValidPlacement, isWithinBoard, isSameX } from './validate';
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */

function displayBoard(player) {
  let cells = '';
  let tw = `${player.type()}-cell bg-white w-full h-full flex items-center justify-center cursor-pointer rounded-md shadow-xl`;
  if (player.type() === 'cpu') tw += ' hover:bg-gray-300';

  for (let i = 0; i < 10; i++) {
    const row = Object.keys(player.board.at).filter((key) => key[1] == i).sort();
    row.forEach((cell) => {
      cells += `<div id="${player.type()}-${cell}" data-no="${cell}" class="${tw}"></div>`;
    });
  }
  const board = document.querySelector(`#${player.type()}`);
  board.innerHTML = cells;
}

function displayShip(cell, id) {
  // const color = id == 'player' ? 'bg-blue-500' : 'bg-red-500';
  const ship = document.querySelector(`#${id}-${cell}`);
  console.log(`#${id}-${cell}`);

  ship.classList.remove('bg-white');
  ship.classList.add('bg-blue-400');
}

function displayShipwreck(player, cell, board) {
  const shipCells = Object.keys(board.at).filter((target) => board.at[target].ship === board.at[cell].ship); //eslint-disable-line
  shipCells.forEach((target) => {
    console.log(`${player}-${target}`);
    document.querySelector(`#${player}-${target}`).innerHTML = '<ion-icon class="absolute md:text-[1.7rem] text-white" name="skull"></ion-icon>';
  });
}

function displayHit(player, cell, board) {
  const color = board.at[cell].ship != null ? 'bg-none' : 'bg-none';
  const icon = board.at[cell].ship != null ? '<ion-icon class="absolute md:text-[1.7rem] text-orange-300" name="flame"></ion-icon>' : '<ion-icon class="absolute rotate-45 md:text-[2.3rem] text-gray-500" name="add"></ion-icon>';
  const target = document.querySelector(`#${player}-${cell}`);

  target.classList.add(color);
  target.innerHTML = icon;

  if (board.at[cell].ship != null && board.at[cell].ship.isSunk()) displayShipwreck(player, cell, board); // eslint-disable-line
}

function displayWinner(player) {
  const message = player.type() === 'cpu' ? 'CPU is the winner!' : 'You are the winner!';
  const winner = document.querySelector('#winner');
  winner.classList.remove('hidden');
  winner.textContent = message;
}

function clickHit(game) {
  document.querySelectorAll('.cpu-cell').forEach((cell) => {
    cell.addEventListener('click', () => {
      if (game.p2.board.at[cell.dataset.no].hit) return;

      game.playRound(cell);
    });
  });
}

function clickRotate(player) {
  const btn = document.querySelector('#rotate');
  btn.addEventListener('click', () => {
    if (btn.classList.contains('rotate-[-45deg]')) {
      btn.classList.remove('rotate-[-45deg]');
      btn.classList.add('rotate-45');
      player.ships.forEach((ship) => { ship.isVerti = false; });
    } else {
      btn.classList.remove('rotate-45');
      btn.classList.add('rotate-[-45deg]');
      player.ships.forEach((ship) => { ship.isVerti = true; });
    }
  });
}

function displayPlacement(cell, ship, board) {
  const xAxis = cell.dataset.no[0];
  const combo = ship.combo([cell.dataset.no]);
  combo.filter((no) => isWithinBoard(no) && isSameX(no, ship, xAxis)).forEach((no) => {
    const place = document.querySelector(`#player-${no}`);
    place.classList.remove('bg-white');
    place.classList.add('bg-green-400');
    if (!isValidPlacement(combo, ship, board)) place.classList.add('bg-red-600');
  });
}

function hidePlacement(cell, ship) {
  const xAxis = cell.dataset.no[0];
  const combo = ship.combo([cell.dataset.no]);
  combo.filter((no) => isWithinBoard(no) && isSameX(no, ship, xAxis)).forEach((no) => {
    const place = document.querySelector(`#player-${no}`);
    place.classList.remove('bg-green-400');
    place.classList.remove('bg-red-600');
    place.classList.add('bg-white');
    place.innerHTML = '';
  });
}

function hoverPlacement(player) {
  document.querySelectorAll('.player-cell').forEach((cell) => {
    console.log(cell);
    cell.addEventListener('mouseenter', () => displayPlacement(cell, player.ships[0], player.board));
    cell.addEventListener('mouseleave', () => hidePlacement(cell, player.ships[0]));
  });
}

function clickPlacement(player) {
  document.querySelectorAll('.player-cell').forEach((cell) => {
    cell.addEventListener('click', () => {
      player.board.placeShip(player.ships[0], cell.dataset.no, player.type());
      player.ships.shift();
      console.log(player.ships);
    });
  });
}

export {
  displayBoard,
  displayShip,
  displayHit,
  clickHit,
  displayWinner,
  displayShipwreck,
  hoverPlacement,
  clickRotate,
  clickPlacement,
};
