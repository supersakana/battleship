function displayBoard(board, id) {
  let cells = '';

  Object.keys(board.at).sort().forEach((key) => {
    cells += `<div id="${id}-${key}" class="text-red-500 bg-white w-full h-full flex items-center justify-center cursor-pointer rounded-md shadow-lg"></div>`;
  });
  document.querySelector(`#${id}`).innerHTML = cells;
}

function displayShip(cell) {
  document.querySelector(`#human-${cell}`).classList.add('bg-green-500');
}

export { displayBoard, displayShip };
