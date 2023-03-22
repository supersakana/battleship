import { displayBoard, enableEvents } from './dom';

function setupPage(game) {
  document.querySelector('#content').innerHTML = `
    <h4 id="winner" class="text-center text-5xl text-gray-600">Place your ships</h4>

      <div id="buttons" class="flex items-center justify-center gap-x-3">
        <ion-icon id="randomize" class="text-4xl cursor-pointer hover:text-gray-500" name="dice-outline"></ion-icon>
        <ion-icon id="rotate" class="rotate-[-45deg] text-3xl cursor-pointer text-blue-600 hover:text-blue-400" name="resize"></ion-icon>
        <ion-icon id="trash" class="text-4xl cursor-pointer text-rose-600 hover:text-rose-500" name="trash"></ion-icon>
        <ion-icon id="finished"  class="text-4xl cursor-pointer text-green-500 hover:text-green-400 hidden" name="checkmark-circle"></ion-icon>
      </div>

      <div class="flex gap-4 flex-col md:flex-row justify-center items-center mx-1">
        <div>
          <h5 id="player-text" class="text-center text-3xl text-gray-500 mb-2 hidden">You</h5>
          <div id="player" class="w-[350px] h-[350px]  md:w-[420px] md:h-[420px] grid grid-cols-10 gap-1"></div>
        </div>
        <div id="cpu-side" class="hidden">
          <h5 class="text-center text-3xl text-gray-500 mb-2">CPU</h5>
          <div id="cpu" class="w-[350px] h-[350px]  md:w-[420px] md:h-[420px] grid grid-cols-10 gap-1"></div>
        </div>
      </div>
    `;
  displayBoard(game.p1);
  enableEvents(game);
}

function mainPage(game) {
  document.querySelector('#content').innerHTML = `
        <div class="flex items-center justify-center gap-x-1 mb-5">
          <h1 class="text-5xl md:text-7xl">Battleship</h1>
          <ion-icon class="text-5xl md:text-7xl text-blue-500" name="boat-outline"></ion-icon>        
        </div>
  
        <div id="difficulty" class="flex items-center justify-center gap-x-2 text-xl md:text-2xl text-white">
          <button id="easy" class="difficulty bg-green-500 hover:bg-green-400 rounded-lg px-4 md:px-5 py-1">Easy</button>
          <button id="medium" class="difficulty bg-yellow-500 hover:bg-yellow-400 rounded-lg px-1 md:px-2 py-1">Medium</button>
          <button id="hard" class="difficulty bg-red-500 hover:bg-red-400 rounded-lg px-4 md:px-5 py-1">Hard</button>
        </div>
        `;

  document.querySelectorAll('.difficulty').forEach((btn) => {
    btn.addEventListener('click', () => setupPage(game));
  });
}

export {
  setupPage,
  mainPage,
};
