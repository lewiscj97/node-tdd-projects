const logger = require('pino')();

function calculateRentalSummary(movie) {
  const summary = {};
  if (movie.type === 'regular') {
    summary.points = 1;
    if (movie.days === 1 || movie.days === 2) {
      summary.price = 2.0;
    } else {
      summary.price = 2.0 + 1.5 * (movie.days - 2);
    }
  }
  return summary;
}

module.exports = { calculateRentalSummary }
