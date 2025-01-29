const expect = require('chai').expect;
const { calculateRentalSummary } = require('../lib/index');
const MovieRental = require('../lib/MovieRental');
const { REGULAR_TYPE, REGULAR_MOVIE_POINTS, NEW_TYPE } = require('../lib/constants');

describe('Video store', () => {
  describe('Price and point calculation, single rental', () => {
    it('should calculate price and points - regular movie - 1 day', () => {
      const movie = new MovieRental('Crazynotes', REGULAR_TYPE, 1);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(2.0);
      expect(rentalSummary.points).to.eq(REGULAR_MOVIE_POINTS);
    });

    it('should calculate price and points - regular movie - 2 days', () => {
      const movie = new MovieRental('Crazynotes', REGULAR_TYPE, 2);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(2.0);
      expect(rentalSummary.points).to.eq(REGULAR_MOVIE_POINTS);
    });

    it('should calculate price and points - regular movie - 3 days', () => {
      const movie = new MovieRental('Crazynotes', REGULAR_TYPE, 3);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(3.5);
      expect(rentalSummary.points).to.eq(REGULAR_MOVIE_POINTS);
    });

    it('should calculate price and points - regular movie - 3 days', () => {
      const movie = new MovieRental('Crazynotes', REGULAR_TYPE, 4);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(5);
      expect(rentalSummary.points).to.eq(REGULAR_MOVIE_POINTS);
    });

    it('should calculate price and points - new release - 1 day', () => {
      const movie = new MovieRental('new movie', NEW_TYPE, 1);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(3);
      expect(rentalSummary.points).to.eq(1);
    });

    it('should calculate price and points - new release - 2 days', () => {
      const movie = new MovieRental('new movie', NEW_TYPE, 2);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(6);
      expect(rentalSummary.points).to.eq(2);
    });

    it('should calculate price and points - new release - 3 days', () => {
      const movie = new MovieRental('new movie', NEW_TYPE, 2);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(6);
      expect(rentalSummary.points).to.eq(2);
    });
  });
});
