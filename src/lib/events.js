function clickHit() {
  document.querySelectorAll('.cell').forEach((cell) => {
    cell.addEventListener('click', () => {
      console.log(`im a cell here is my id: ${cell.id}`);
    });
  });
}

export { clickHit }; //eslint-disable-line
