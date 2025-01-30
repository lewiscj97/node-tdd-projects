const expect = require('chai').expect;
const { getRomanNumeral } = require('../lib/index');
const {P} = require("pino");

describe('Roman numerals', () => {
  it('should return correct response for input: 1', () => {
    const expected = 'I';
    const input = 1;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct response for input: 2', () => {
    const expected = 'II';
    const input = 2;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct response for input: 3', () => {
    const expected = 'III';
    const input = 3;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct response for input: 4', () => {
    const expected = 'IV';
    const input = 4;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct response for input: 5', () => {
    const expected = 'V';
    const input = 5;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct response for input: 6', () => {
    const expected = 'VI';
    const input = 6;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct response for input: 7', () => {
    const expected = 'VII';
    const input = 7;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct response for input: 8', () => {
    const expected = 'VIII';
    const input = 8;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct response for input: 9', () => {
    const expected = 'IX';
    const input = 9;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct response for input: 10', () => {
    const expected = 'X';
    const input = 10;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should go back to single digits after 10', () => {
    const expected = 'XI';
    const input = 11;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct value for 39', () => {
    const expected = 'XXXIX';
    const input = 39;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct value for 40', () => {
    const expected = 'XL';
    const input = 40;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct value for 49', () => {
    const expected = 'XLIX';
    const input = 49;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });

  it('should return correct value for 50', () => {
    const expected = 'L';
    const input = 50;
    const output = getRomanNumeral(input);

    expect(output).to.eq(expected);
  });
});
