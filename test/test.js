const expect = require('chai').expect;
const { processInput, calculateFrameScore } = require('../lib/bowling');

describe('Service test', () => {

  it('should return hello world', () => {
    const input = 'X 45 4/ 32';
    const expected = [['X'], ['4', '5'], ['4', '/'], ['3', '2']];
    const output = processInput(input);

    expect(output).to.deep.eq(expected);
  });

  it('should return the score of a frame if not a strike or spare', () => {
    const input = ['4', '5'];
    const expected = 9;

    const score = calculateFrameScore(input);

    expect(score).to.eq(expected);
  });
});
