const expect = require('chai').expect;
const { helloWorld } = require('../lib/index');

describe('Service test', () => {

  it('should return hello world', () => {
    const expected = 'Hello, World!';
    const output = helloWorld();

    expect(output).to.eq(expected);
  });
});
