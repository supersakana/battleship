function isValid(combo, ship, board) {
  const yAxis = combo[0][1];

  if (ship.isVerti) {
    return combo.every((coord) => coord >= 0 && coord <= 99
                        && board.at[coord].ship === null
                        && coord[0] === yAxis);
  }
  return combo.every((coord) => coord >= 0 && coord <= 99
                        && board.at[coord].ship === null);
}

export { isValid }; // eslint-disable-line
