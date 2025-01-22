const logger = require('pino')();

function processInput(input) {
  const frames = input.split(' ');
  return frames.map((frame) => frame.split(''));
}

function calculateTotalScore(frames) {
  let score = 0;

  frames.forEach((frame, i) => {
    if (i === 9) {
      // Final frame rules
      score += _calculateFinalFrameScore(frame);
    } else if (frame.includes('/')) {
      // spare
      score += 10 + Number.parseInt(frames[i+1][0]);
    } else if (frame.includes('X')) {
      score += _calculateStrikeScore(i, frames);
    } else {
      // normal score
      score += calculateFrameScore(frame);
    }
  });

  return score;
}

function _calculateStrikeScore(currentFrameIndex, frames) {
  let consecutiveStrikes = 0;
  let score = 0;

  for (let i = currentFrameIndex; i < frames.length; i++) {
    if (frames[i].includes('X')) {
      consecutiveStrikes++;
    } else {
      break;
    }
  }

  switch (consecutiveStrikes) {
    case 1:
      score += 10 + calculateFrameScore(frames[currentFrameIndex + 1]);
      break;
    case 2:
      score += 20 + Number.parseInt(frames[currentFrameIndex+2][0]);
      break;
    default:
      score += 30;
      break;
  }

  return score;
}

function calculateFrameScore(frame) {
  if (frame.includes('X')) {
    return 10;
  } else {
    const integerFrame = frame.map((score) => Number.parseInt(score, 10));
    return integerFrame.reduce((partialSum, a) => partialSum + a, 0);
  }
}

function _calculateFinalFrameScore(frame) {
  let score = 0;
  frame.forEach((thro) => {
    if (thro === 'X') {
      score += 10;
    } else {
      score += Number.parseInt(thro);
    }
  });

  return score;
}

module.exports = { processInput, calculateFrameScore, calculateTotalScore }
