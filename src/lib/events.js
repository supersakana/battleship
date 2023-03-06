function cpuAttack(player) {
  const random = player.board.hitlessCells()[Math.floor(((Math.random()) * player.board.hitlessCells().length))]; //eslint-disable-line
  player.board.receiveAttack(random, player.type);
}

function clickHit(cpu, human) {
  document.querySelectorAll(`.${cpu.type}-cell`).forEach((cell) => {
    cell.addEventListener('click', () => {
      cpu.board.receiveAttack(cell.dataset.no, cpu.type);
      setTimeout(cpuAttack, 500, human);
    });
  });
}

export { clickHit }; //eslint-disable-line
