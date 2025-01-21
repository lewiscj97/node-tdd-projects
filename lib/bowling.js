const logger = require('pino')();

function processInput(input) {
  const frames = input.split(' ');
  return frames.map((frame) => frame.split(''));
}

function calculateScore(frames) {
  let score = 0;

  frames.forEach((frame, i) => {
    if (i === 9) {
      // Final frame rules
      if (frame.includes('X')) {
        score += 10 + Number.parseInt(frame[1]) + Number.parseInt(frame[2]);
        score += calculateIntegerFrameScore([frame[1], frame[2]]);
      }
    } else if (frame.includes('/')) {
      // spare
      score += 10 + Number.parseInt(frames[i+1][0]);
    } else if (frame.includes('X')) {
      // strike
      score += 10 + calculateIntegerFrameScore(frames[i+1]);
    } else {
      // normal score
      score += calculateIntegerFrameScore(frame);
    }
  });

  return score;
}

function calculateIntegerFrameScore(frame) {
  const integerFrame = frame.map((score) => Number.parseInt(score, 10));
  return integerFrame.reduce((partialSum, a) => partialSum + a, 0);
}

module.exports = { processInput, calculateIntegerFrameScore, calculateScore }
