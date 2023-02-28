function isWithinBoard(coord) {
  return coord >= 0 && coord <= 99;
}

function isSameY(coord, ship, yAxis) {
  if (ship.isVerti) return coord[0] === yAxis;

  return true;
}

function isVaccant(coord, board) {
  return board.at[coord].ship === null;
}

// public

function isValid(combo, ship, board) {
  const yAxis = combo[0][1];

  return combo.every((coord) => isWithinBoard(coord)
                             && isVaccant(coord, board)
                             && isSameY(coord, ship, yAxis));
}

export { isValid }; // eslint-disable-line
