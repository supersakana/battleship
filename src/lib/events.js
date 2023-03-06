function cpuAttack(player) {
  const hitless = Object.keys(player.board.at).filter((cell) => player.board.at[cell].hit === false); //eslint-disable-line
  const random = hitless[Math.floor(((Math.random()) * hitless.length))];
  player.board.receiveAttack(random, 'human');
}

function clickHit(cpu, id, human) {
  document.querySelectorAll(`.${id}-cell`).forEach((cell) => {
    cell.addEventListener('click', () => {
      cpu.board.receiveAttack(cell.dataset.no, id);
      cpuAttack(human);
    });
  });
}

export { clickHit }; //eslint-disable-line
