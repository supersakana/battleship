/* eslint-disable no-param-reassign */

function clickRotate(player) {
  const btn = document.querySelector('#rotate');
  btn.addEventListener('click', () => {
    if (btn.classList.contains('rotate-[-45deg]')) {
      btn.classList.remove('rotate-[-45deg]');
      btn.classList.add('rotate-45');
      player.ships.forEach((ship) => { ship.isVerti = false; });
    } else {
      btn.classList.remove('rotate-45');
      btn.classList.add('rotate-[-45deg]');
      player.ships.forEach((ship) => { ship.isVerti = true; });
    }
  });
}

function resetBoard(player) {
  player.ships = player.createShips();
  player.board.reset();
  document.querySelector('#finished').classList.add('hidden');
  document.querySelectorAll('.player-cell').forEach((cell) => {
    cell.classList.remove('bg-green-400');
    cell.classList.add('bg-white');

    const rotate = document.querySelector('#rotate');
    rotate.classList.add('rotate-[-45deg]');
    rotate.classList.remove('rotate-45');
  });
}

function clickTrash(player) {
  const btn = document.querySelector('#trash');
  btn.addEventListener('click', () => resetBoard(player));
}

function clickRandomize(player) {
  const btn = document.querySelector('#randomize');
  btn.addEventListener('click', () => {
    resetBoard(player);
    player.randomize();
    document.querySelector('#finished').classList.remove('hidden');
    player.ships = [];
  });
}

export {
  clickRotate,
  clickTrash,
  clickRandomize,
};
