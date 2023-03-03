function clickHit(board, id) {
  document.querySelectorAll(`.${id}-cell`).forEach((cell) => {
    cell.addEventListener('click', () => {
      board.receiveAttack(cell.dataset.no, id);
    });
  });
}

export { clickHit }; //eslint-disable-line
