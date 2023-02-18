function start() {
  document.querySelector('#title').classList.add('text-3xl', 'text-rose-500', 'underline', 'bg-lime-300');
  document.querySelector('#content').innerHTML = '<p class="text-2xl text-purple-500">sup</p>';
  console.log('this is where the game will start!');
}

function testFunction() {
  return 'the test is working!';
}

export { start, testFunction }; // eslint-disable-line
