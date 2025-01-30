function getRomanNumeral(input) {
  let response = '';
  let currentCount = input;

  while (currentCount > 0) {
    if (currentCount >= 5) {
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
