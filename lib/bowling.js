const logger = require('pino')();

function processInput(input) {
  const frames = input.split(' ');
  const processedFrames = frames.map((frame) => frame.split(''));

  return processedFrames;
}

function calculateScore(frames) {
  let score = 0;

  frames.forEach((frame, i) => {
    if (frame.includes('/')) {
      score += 10 + Number.parseInt(frames[i+1][0]);
    } else {
      score += calculateFrameScore(frame);
    }
  });

  return score;
}

function calculateFrameScore(frame) {
  const integerFrame = frame.map((score) => Number.parseInt(score, 10));
  return integerFrame.reduce((partialSum, a) => partialSum + a, 0);
}

module.exports = { processInput, calculateFrameScore, calculateScore }
