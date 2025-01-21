const expect = require('chai').expect;
const { processInput } = require('../lib/bowling');

describe('Service test', () => {

  it('should return hello world', () => {
    const input = 'X 45 4/ 32';
    const expected = [['X'], ['4', '5'], ['4', '/'], ['3', '2']];
    const output = processInput(input);

    expect(output).to.deep.eq(expected);
  });
});
