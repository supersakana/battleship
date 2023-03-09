/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */

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
  document.querySelector(`#${player.type()}`).innerHTML = cells;
}

function displayShip(cell, id) {
  const color = id == 'player' ? 'bg-green-500' : 'bg-rose-500';
  const ship = document.querySelector(`#${id}-${cell}`);

  ship.classList.remove('bg-white');
  ship.classList.add(color);
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

export {
  displayBoard, displayShip, displayHit, clickHit, displayWinner, displayShipwreck,
};
