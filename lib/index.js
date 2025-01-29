const logger = require('pino')();

function calculateRentalSummary(movie) {
  const summary = {};
  if (movie.type === 'regular') {
    if (movie.days === 1 || movie.days === 2) {
      summary.price = 2.0;
      summary.points = 1;
    }
  }
  return summary;
}

module.exports = { calculateRentalSummary }
