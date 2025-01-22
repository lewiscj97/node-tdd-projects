function numberToLcd(input) {
  const matrix = [[], [], []];
  const inputArray = input.toString().split('');

  inputArray.forEach((value, index) => {
    switch (value) {
      case '1':
        matrix[0].push(' ');
        matrix[1].push('|');
        matrix[2].push('|');
        break;
      case '2':
        matrix[0].push(' _ ');
        matrix[1].push(' _|');
        matrix[2].push('|_ ');
      default:
        break;
    }
  });

  return matrix;
}

module.exports = { numberToLcd }
