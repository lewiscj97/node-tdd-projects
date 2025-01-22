const expect = require('chai').expect;
const { processInput, calculateFrameScore, calculateTotalScore } = require('../lib/bowling');
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

    const score = calculateFrameScore(input);

    expect(score).to.eq(expected);
  });

  it('should return the score if a spare is achieved', () => {
    const input = [['4', '/'], ['3', '2']];
    const expectedTotalScore = 10 + 3 + 5;

    const score = calculateTotalScore(input);

    expect(score).to.eq(expectedTotalScore);
  });

  it('should return the score if a strike is achieved', () => {
    const input = [['X'], ['4', '5']];
    const expectedTotalScore = 19 + 9;

    const score = calculateTotalScore(input);

    expect(score).to.eq(expectedTotalScore);
  });

  it('should calculate correct score of test input', () => {
    const input = 'X 45 4/ 32';
    const frames = processInput(input);
    const expected = 46;

    const score = calculateTotalScore(frames);

    expect(score).to.eq(expected);
  });

  it('should account for strikes in the final frame', () => {
    const input = '11 11 11 11 11 11 11 11 11 X43';
    const frames = processInput(input);
    const expected = 18 + 10 + 7;

    const score = calculateTotalScore(frames);

    expect(score).to.eq(expected);
  });

  it('should account for two strikes in a row', () => {
    const input = '43 5/ 54 X X 24';
    const frames = processInput(input);
    const expected = 75;

    const score = calculateTotalScore(frames);

    expect(score).to.eq(expected);
  });

  it('should account for three strikes in a row', () => {
    const input = '43 5/ 54 X X X 24';
    const frames = processInput(input);
    const expected = 105;

    const score = calculateTotalScore(frames);

    expect(score).to.eq(expected);
  });

  it('should account for four strikes in a row', () => {
    const input = '43 5/ 54 X X X X 24';
    const frames = processInput(input);
    const expected = 135;

    const score = calculateTotalScore(frames);

    expect(score).to.eq(expected);
  });

  it('should allow 3 strikes in the final frame', () => {
    const input = '11 11 11 11 11 11 11 11 11 XXX';
    const frames = processInput(input);
    const expected = 18 + 10 + 10 + 10;

    const score = calculateTotalScore(frames);

    expect(score).to.eq(expected);
  });
});
