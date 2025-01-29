const { REGULAR_TYPE, REGULAR_MOVIE_POINTS, NEW_TYPE } = require('./constants');

function calculateRentalSummary(movie) {
  const summary = {};
  if (movie.type === REGULAR_TYPE) {
    summary.points = REGULAR_MOVIE_POINTS;
    summary.price = _calculateRegularMoviePrice(movie);
  } else if (movie.type === NEW_TYPE) {
    summary.points = 1;
    summary.price = 3.0;
  }
  return summary;
}

function _calculateRegularMoviePrice(movie) {
  return (movie.days < 3) ? 2.0 : 2.0 + 1.5 * (movie.days - 2);
}

module.exports = { calculateRentalSummary }
