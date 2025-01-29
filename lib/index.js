const REGULAR_MOVIE_POINTS = 1;
const REGULAR_TYPE = 'regular'

function calculateRentalSummary(movie) {
  const summary = {};
  if (movie.type === REGULAR_TYPE) {
    summary.points = REGULAR_MOVIE_POINTS;
    summary.price = _calculateRegularMoviePrice(movie);
  }
  return summary;
}

function _calculateRegularMoviePrice(movie) {
  return (movie.days < 3) ? 2.0 : 2.0 + 1.5 * (movie.days - 2);
}

module.exports = { calculateRentalSummary }
