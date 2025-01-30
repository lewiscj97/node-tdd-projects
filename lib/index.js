const romanNumerals = [['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];

function getRomanNumeral(input) {
  let response = '';
  let currentCount = input;

  for (const [symbol, value] of romanNumerals) {
    while (currentCount >= value) {
      currentCount -= value;
      response += symbol;
    }
  }

  return response;
}

module.exports = { getRomanNumeral }
