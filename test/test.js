const expect = require('chai').expect;
const { getRomanNumeral } = require('../lib/index');

describe('Roman numerals', () => {
  it('should return correct response for input: 1', () => {
    const expected = 'I';
    const input = 1;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });
});
