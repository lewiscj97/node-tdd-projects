const logger = require('pino')();

function wordle(guess, target) {
  const guessArray = guess.split('');
  const targetArray = target.split('');
  let responseArray = [];

  guessArray.forEach((letter, i) => {
    if (!targetArray.includes(letter)) {
      responseArray.push('0');
    }
  });

  return responseArray.join('');
}

module.exports = { wordle }
