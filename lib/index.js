function wordle(guess, target) {
  const [guessArray, targetArray] = processInputs(guess, target);

  let responseArray = [];
  let checkedLetters = [];

  guessArray.forEach((letter, index) => {
    if (isLetterInCorrectPosition(letter, index, targetArray)) {
      responseArray.push('2');
    } else if (isLetterCorrectPresentNotAccountedFor(letter, index, targetArray, checkedLetters)) {
      responseArray.push('1');
    } else {
      responseArray.push('0');
    }
    checkedLetters.push(letter);
  });

  return responseArray.join('');
}

function processInputs(guess, target) {
  return [guess.split(''), target.split('')];
}

function isLetterInCorrectPosition(letter, index, targetArray) {
  return targetArray[index] === letter;
}

function isLetterCorrectPresentNotAccountedFor(letter, index, targetArray, checkedLetters) {
  return targetArray.includes(letter) && !checkedLetters.includes(letter);
}

module.exports = { wordle }
