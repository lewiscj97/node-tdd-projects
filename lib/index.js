const logger = require('pino')();

function wordle(guess, target) {
  const guessArray = guess.split('');
  const targetArray = target.split('');
  let responseArray = [];

  guessArray.forEach((letter, i) => {
    if (!targetArray.includes(letter)) {
      responseArray.push('0');
    } else if (targetArray[i] === letter) {
      responseArray.push('2');
    } else if (targetArray.includes(letter)) {
      responseArray.push('1');
    }
  });

  return responseArray.join('');
}

module.exports = { wordle }
