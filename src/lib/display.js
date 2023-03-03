import { clickHit } from './events';

/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */

function displayBoard(board, id) {
  let cells = '';

  for (let i = 0; i < 10; i++) {
    const row = Object.keys(board.at).filter((key) => key[1] == i).sort();
    row.forEach((cell) => {
      cells += `<div id="${id}-${cell}" data-no="${cell}" class="${id}-cell bg-white w-full h-full flex items-center justify-center cursor-pointer rounded-md shadow-xl"></div>`;
    });
  }
  document.querySelector(`#${id}`).innerHTML = cells;
  clickHit(board, id);
}

function displayShip(cell, id) {
  const color = id == 'human' ? 'bg-green-500' : 'bg-rose-500';
  const ship = document.querySelector(`#${id}-${cell}`);

  ship.classList.remove('bg-white');
  ship.classList.add(color);
}

function displayHit(id, target) {
  const color = target.ship != null ? 'bg-orange-500' : 'bg-none';
  const icon = target.ship != null ? '<ion-icon class="absolute md:text-[1.7rem]" name="flame-outline"></ion-icon>' : '<ion-icon class="absolute rotate-45 md:text-[2.5rem]" name="add"></ion-icon>';
  const cell = document.querySelector(`#${id}`);

  cell.classList.add(color);
  cell.innerHTML = icon;
}

export {
  displayBoard, displayShip, displayHit,
};
