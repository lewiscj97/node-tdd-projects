const logger = require('pino')();

function wordle(guess, target) {
  const guessArray = guess.split('');
  const targetArray = target.split('');
  let responseArray = [];
  let checkedLetters = [];

  guessArray.forEach((letter, i) => {
    if (targetArray[i] === letter) {
      responseArray.push('2');
    } else if (targetArray.includes(letter) && !checkedLetters.includes(letter)) {
      responseArray.push('1');
    } else {
      responseArray.push('0');
    }
    checkedLetters.push(letter);
  });

  return responseArray.join('');
}

module.exports = { wordle }
