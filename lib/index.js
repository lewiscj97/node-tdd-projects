function getRomanNumeral(input) {
  if (input === 4) {
    return 'IV';
  } else if (input === 5) {
    return 'V';
  } else{
    return 'I'.repeat(input);
  }
}

module.exports = { getRomanNumeral }
