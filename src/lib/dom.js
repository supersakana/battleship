function displayBoard(board) {
  let cells = '';
  Object.keys(board.at)
    .sort()
    .forEach((key) => {
      cells += `<div class="text-red-500 bg-white w-full h-full flex items-center justify-center cursor-pointer rounded-md shadow-lg">${key}</div>`;
    });
  document.querySelector('#board').innerHTML = cells;
}

export { displayBoard }; //eslint-disable-line
