import Game from '../src/js/game';
/* eslint-disable */
test('it returns message', () => {
  const game = new Game();
  expect(game.testFunction()).toEqual('the test is working!');
});
/* eslint-enable */
