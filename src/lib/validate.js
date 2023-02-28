function isWithinBoard(coord) {
  return coord >= 0 && coord <= 99;
}

function isSameX(coord, ship, xAxis) {
  if (ship.isVerti) {
    return coord[0] === xAxis;
  }
  return true;
}

function isVaccant(coord, board) {
  return board.at[coord].ship === null;
}

// public

function isValid(combo, ship, board) {
  const xAxis = combo[0][0];

  const res = combo.every((coord) => isWithinBoard(coord)
                             && isVaccant(coord, board)
                             && isSameX(coord, ship, xAxis));

  console.log(`${combo} -> isValid = ${res} -> ${xAxis} -> isVerti ${ship.isVerti}`);
  return res;
}

export { isValid }; // eslint-disable-line
