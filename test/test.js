const expect = require('chai').expect;
const { processInput, calculateIntegerFrameScore, calculateScore } = require('../lib/bowling');
const {P} = require("pino");

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

    const score = calculateIntegerFrameScore(input);

    expect(score).to.eq(expected);
  });

  it('should return the score if a spare is achieved', () => {
    const input = [['4', '/'], ['3', '2']];
    const expectedTotalScore = 10 + 3 + 5;

    const score = calculateScore(input);

    expect(score).to.eq(expectedTotalScore);
  });

  it('should return the score if a strike is achieved', () => {
    const input = [['X'], ['4', '5']];
    const expectedTotalScore = 19 + 9;

    const score = calculateScore(input);

    expect(score).to.eq(expectedTotalScore);
  });

  it('should calculate correct score of test input', () => {
    const input = 'X 45 4/ 32';
    const frames = processInput(input);
    const expected = 46;

    const score = calculateScore(frames);

    expect(score).to.eq(expected);
  });
});
