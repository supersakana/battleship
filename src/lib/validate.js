function isWithinBoard(coord) {
  return coord >= 0 && coord <= 99;
}

function isSameX(coord, ship, xAxis) {
  if (ship.isVerti) return coord[0] === xAxis;

  return true;
}

function isVaccant(coord, board) {
  return board.at[coord].ship === null;
}

function isNotHit(coord, board) {
  return board.at[coord].hit === false;
}

// public

function isValidPlacement(combo, ship, board) {
  const xAxis = combo[0][0];

  return combo.every((coord) => isWithinBoard(coord)
                             && isVaccant(coord, board)
                             && isSameX(coord, ship, xAxis));
}

function isValidGuess(coord, board) {
  return isWithinBoard(coord) && isNotHit(coord, board);
}

export { isValidPlacement, isValidGuess };
