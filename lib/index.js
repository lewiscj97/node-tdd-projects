function getRomanNumeral(input) {
  let response = '';
  let currentCount = input;

  while (currentCount > 0) {
    if (currentCount >= 100) {
      currentCount -= 100;
      response += 'C';
    } else if (currentCount >= 90) {
      currentCount -= 90;
      response += 'XC';
    } else if (currentCount >= 50) {
      currentCount -= 50;
      response += 'L';
    } else if (currentCount >= 40) {
      currentCount -= 40;
      response += 'XL';
    } else if (currentCount >= 10) {
      currentCount -= 10;
      response += 'X';
    } else if (currentCount >= 9) {
      currentCount -= 9;
      response += 'IX';
    } else if (currentCount >= 5) {
      currentCount -= 5;
      response += 'V';
    } else if (currentCount >= 4) {
      currentCount -= 4;
      response += 'IV';
    } else {
      response += 'I'.repeat(currentCount);
      currentCount -= currentCount;
    }
  }
  return response;
}

module.exports = { getRomanNumeral }
