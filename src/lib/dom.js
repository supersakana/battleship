function displayBoard(board, id) {
  let cells = '';

  Object.keys(board.at).sort().forEach((key) => {
    cells += `<div id="${id}-${key}" class="bg-white w-full h-full flex items-center justify-center cursor-pointer rounded-md shadow-lg"></div>`;
  });
  document.querySelector(`#${id}`).innerHTML = cells;
}

function displayShip(cell) {
  const ship = document.querySelector(`#human-${cell}`);
  ship.classList.remove('bg-white');
  ship.classList.add('bg-green-500');
}

export { displayBoard, displayShip };
