const expect = require('chai').expect;
const { numberToLcd } = require('../lib/index');

describe('Number to LCD', () => {
  // Going to use a matrix
  it('should return correct value for 1', () => {
    const input = 1;
    const expected =
      [
        [' '],
        ['|'],
        ['|']
      ];

    const output = numberToLcd(input);
    expect(output).to.deep.eq(expected);
  });
});
