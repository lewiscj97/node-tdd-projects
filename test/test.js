const expect = require('chai').expect;
const { wordle } = require('../lib/index');

describe('Wordle', () => {
  it('should return all 0s if letters do not match', () => {
    const guess = 'child';
    const target = 'ropes';
    const expected = '00000';

    const output = wordle(guess, target);

    expect(output).to.eq(expected);
  });
});
