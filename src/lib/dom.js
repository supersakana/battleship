/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */

function displayBoard(board, id) {
  let cells = '';

  for (let i = 0; i < 10; i++) {
    const row = Object.keys(board.at).filter((key) => key[1] == i).sort();
    row.forEach((cell) => {
      cells += `<div id="${id}-${cell}" class="bg-white w-full h-full flex items-center justify-center cursor-pointer rounded-md shadow-lg"></div>`;
    });
  }
  document.querySelector(`#${id}`).innerHTML = cells;
}

function displayShip(cell, id) {
  const color = id == 'human' ? 'bg-green-500' : 'bg-rose-500';
  const ship = document.querySelector(`#${id}-${cell}`);

  ship.classList.remove('bg-white');
  ship.classList.add(color);
}

export { displayBoard, displayShip };
