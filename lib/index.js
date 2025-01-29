const {
  REGULAR_TYPE,
  REGULAR_MOVIE_POINTS,
  NEW_TYPE,
  NEW_MOVIE_PRICE_PER_DAY,
  CHILDREN_TYPE,
  CHILDREN_MOVIE_POINTS
} = require('./constants');

function calculateRentalSummary(...movies) {
  const summary = {
    points: 0,
    price: 0,
  };
  movies.forEach((movie) => _calculateSummaryForMovie(movie, summary));
  return summary;
}

function _calculateSummaryForMovie(movie, summary) {
  const rentalDays = movie.days;
  if (movie.type === REGULAR_TYPE) {
    summary.points += REGULAR_MOVIE_POINTS;
    summary.price += _calculateRegularMoviePrice(rentalDays);
  } else if (movie.type === NEW_TYPE) {
    summary.price += NEW_MOVIE_PRICE_PER_DAY * movie.days;
    summary.points += _calculateNewMoviePoints(rentalDays);
  } else if (movie.type === CHILDREN_TYPE) {
    summary.points += CHILDREN_MOVIE_POINTS;
    summary.price += _calculateChildrenMoviePrice(rentalDays);
  }
}

function _calculateChildrenMoviePrice(days) {
  return (days > 3) ? 1.5 + (days - 3) * 1.5 : 1.5;
}

function _calculateNewMoviePoints(days) {
  return (days < 2) ? 1 : 2;
}

function _calculateRegularMoviePrice(days) {
  return (days < 3) ? 2.0 : 2.0 + 1.5 * (days - 2);
}

module.exports = { calculateRentalSummary }
