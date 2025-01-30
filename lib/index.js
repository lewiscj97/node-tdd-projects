function getRomanNumeral(input) {
  if (input === 1) {
    return 'I';
  } else if (input === 2) {
    return 'II';
  } else if (input === 3) {
    return 'III';
  }
}

module.exports = { getRomanNumeral }
