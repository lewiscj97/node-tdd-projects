const {
  REGULAR_TYPE,
  REGULAR_MOVIE_POINTS,
  NEW_TYPE,
  NEW_MOVIE_PRICE_PER_DAY
} = require('./constants');

function calculateRentalSummary(movie) {
  const summary = {};
  if (movie.type === REGULAR_TYPE) {
    summary.points = REGULAR_MOVIE_POINTS;
    summary.price = _calculateRegularMoviePrice(movie);
  } else if (movie.type === NEW_TYPE) {
    summary.price = NEW_MOVIE_PRICE_PER_DAY * movie.days;
    summary.points = _calculateNewMoviePoints(movie);
  }
  return summary;
}

function _calculateNewMoviePoints(movie) {
  return (movie.days < 2) ? 1 : 2;
}

function _calculateRegularMoviePrice(movie) {
  return (movie.days < 3) ? 2.0 : 2.0 + 1.5 * (movie.days - 2);
}

module.exports = { calculateRentalSummary }
