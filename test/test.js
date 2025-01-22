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

  it('should return 2s for letters in correct locations', () => {
    const guess = 'alert';
    const target = 'alarm';
    const expected = '22020';

    const output = wordle(guess, target);

    expect(output).to.eq(expected);
  });

  it('should return 1s for correct letters in incorrect locations', () => {
    const guess = 'chore';
    const target = 'stair';
    const expected = '00010';

    const output = wordle(guess, target);

    expect(output).to.eq(expected);
  });

  it('mix of matches and incorrect positions', () => {
    const guess = 'charm';
    const target = 'hairy';
    const expected = '01120';

    const output = wordle(guess, target);

    expect(output).to.eq(expected);
  });

  it('returns 0 if the letter has already been accounted for', () => {
    const guess = 'elect';
    const target = 'reads';
    const expected = '10000';

    const output = wordle(guess, target);

    expect(output).to.eq(expected);
  });
});
