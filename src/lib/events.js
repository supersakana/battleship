function cpuAttack(player) {
  const random = player.board.hitlessCells()[Math.floor(((Math.random()) * player.board.hitlessCells().length))]; //eslint-disable-line
  player.board.receiveAttack(random, 'human');
}

function clickHit(cpu, id, human) {
  document.querySelectorAll(`.${id}-cell`).forEach((cell) => {
    cell.addEventListener('click', () => {
      cpu.board.receiveAttack(cell.dataset.no, id);
      setTimeout(cpuAttack, 500, human);
    });
  });
}

export { clickHit }; //eslint-disable-line
