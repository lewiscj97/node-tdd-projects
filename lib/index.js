function numberToLcd(input) {
  const matrix = numberToLcdMatrix(input);
  return matrix.map((row) => row.join('')).join('\n');
}

function numberToLcdMatrix(input) {
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
        break;
      case '3':
        matrix[0].push(' _ ');
        matrix[1].push(' _|');
        matrix[2].push(' _|');
        break;
      case '4':
        matrix[0].push('   ');
        matrix[1].push('|_|');
        matrix[2].push('  |');
        break;
      case '5':
        matrix[0].push(' _ ');
        matrix[1].push('|_ ');
        matrix[2].push(' _|');
        break;
      case '6':
        matrix[0].push(' _ ');
        matrix[1].push('|_ ');
        matrix[2].push('|_|');
        break;
      case '7':
        matrix[0].push(' _ ');
        matrix[1].push('  |');
        matrix[2].push('  |');
        break;
      case '8':
        matrix[0].push(' _ ');
        matrix[1].push('|_|');
        matrix[2].push('|_|');
        break;
      case '9':
        matrix[0].push(' _ ');
        matrix[1].push('|_|');
        matrix[2].push(' _|');
        break;
      default:
        break;
    }
  });

  return matrix;
}

module.exports = { numberToLcdMatrix, numberToLcd }
