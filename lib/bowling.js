const logger = require('pino')();

function processInput(input) {
  const frames = input.split(' ');
  const processedFrames = frames.map((frame) => frame.split(''));

  return processedFrames;
}

module.exports = { processInput }
