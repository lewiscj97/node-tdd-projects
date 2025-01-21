const logger = require('pino')();

function processInput(input) {
  const frames = input.split(' ');
  const processedFrames = frames.map((frame) => frame.split(''));

  return processedFrames;
}

function calculateFrameScore(frame) {
  const integerFrame = frame.map((score) => Number.parseInt(score, 10));
  return integerFrame.reduce((partialSum, a) => partialSum + a, 0);
}

module.exports = { processInput, calculateFrameScore }
