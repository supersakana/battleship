/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */

function displayBoard(player) {
  let cells = '';

  for (let i = 0; i < 10; i++) {
    const row = Object.keys(player.board.at).filter((key) => key[1] == i).sort();
    row.forEach((cell) => {
      cells += `<div id="${player.type}-${cell}" data-no="${cell}" class="${player.type}-cell bg-white w-full h-full flex items-center justify-center cursor-pointer rounded-md shadow-xl hover:bg-gray-300"></div>`;
    });
  }
  document.querySelector(`#${player.type}`).innerHTML = cells;
}

function displayShip(cell, id) {
  const color = id == 'player' ? 'bg-green-500' : 'bg-rose-500';
  const ship = document.querySelector(`#${id}-${cell}`);

  ship.classList.remove('bg-white');
  ship.classList.add(color);
}

function displayHit(id, target) {
  const color = target.ship != null ? 'bg-none' : 'bg-none';
  const icon = target.ship != null ? '<ion-icon class="absolute md:text-[1.7rem] text-orange-300" name="flame"></ion-icon>' : '<ion-icon class="absolute rotate-45 md:text-[2.3rem] text-gray-500" name="add"></ion-icon>';
  const cell = document.querySelector(`#${id}`);

  cell.classList.add(color);
  cell.innerHTML = icon;
}

function displayWinner(player) {
  const message = player.type === 'cpu' ? 'CPU is the winner!' : 'You are the winner!';
  const winner = document.querySelector('#winner');
  winner.classList.remove('hidden');
  winner.textContent = message;
}

function cpuCoord(cpu, human) {
  if (cpu.guesses.length === 0) {
    return human.board.hitlessCells()[Math.floor(((Math.random()) * human.board.hitlessCells().length))]; //eslint-disable-line
  }
  const coord = cpu.guesses[Math.floor(((Math.random()) * cpu.guesses.length))];
  cpu.guesses.splice(cpu.guesses.indexOf(coord), 1);
  return coord;
}

function cpuAttack(cpu, human) {
  const coord = cpuCoord(cpu, human);
  human.board.receiveAttack(coord, human.type);
  if (human.board.noMoreShips()) displayWinner(cpu);
  if (human.board.at[coord].ship != null) cpu.setGuesses(coord, human.board);
}

function clickHit(cpu, human) {
  document.querySelectorAll(`.${cpu.type}-cell`).forEach((cell) => {
    cell.addEventListener('click', () => {
      if (cpu.board.at[cell.dataset.no].hit) return;

      cpu.board.receiveAttack(cell.dataset.no, cpu.type);
      if (cpu.board.noMoreShips()) {
        displayWinner(human);
      } else {
        setTimeout(cpuAttack, 500, cpu, human);
      }
    });
  });
}

export {
  displayBoard, displayShip, displayHit, clickHit,
};
