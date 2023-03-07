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

// public

function isValid(combo, ship, board) {
  const xAxis = combo[0][0];

  return combo.every((coord) => isWithinBoard(coord)
                             && isVaccant(coord, board)
                             && isSameX(coord, ship, xAxis));
}

export { isValid, isWithinBoard };
