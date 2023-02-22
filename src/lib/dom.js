function displayBoard(board, player) {
  let cells = '';
  const id = `#${player}`;

  Object.keys(board.at)
    .sort()
    .forEach((key) => {
      cells += '<div class="text-red-500 bg-white w-full h-full flex items-center justify-center cursor-pointer rounded-md shadow-lg"></div>';
    });
  document.querySelector(id).innerHTML = cells;
}

export { displayBoard }; //eslint-disable-line
