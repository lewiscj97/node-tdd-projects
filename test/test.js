const expect = require('chai').expect;
const { calculateRentalSummary } = require('../lib/index');
const MovieRental = require('../lib/MovieRental');
const { REGULAR_TYPE, REGULAR_MOVIE_POINTS, NEW_TYPE, CHILDREN_TYPE } = require('../lib/constants');

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
      const movie = new MovieRental('new movie', NEW_TYPE, 3);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(9);
      expect(rentalSummary.points).to.eq(2);
    });

    it('should calculate price and points - childrens movie - 1 day', () => {
      const movie = new MovieRental('childrens movie', CHILDREN_TYPE, 1);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(1.5);
      expect(rentalSummary.points).to.eq(1);
    });

    it('should calculate price and points - childrens movie - 2 days', () => {
      const movie = new MovieRental('childrens movie', CHILDREN_TYPE, 2);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(1.5);
      expect(rentalSummary.points).to.eq(1);
    });

    it('should calculate price and points - childrens movie - 3 days', () => {
      const movie = new MovieRental('childrens movie', CHILDREN_TYPE, 3);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(1.5);
      expect(rentalSummary.points).to.eq(1);
    });

    it('should calculate price and points - childrens movie - 4 days', () => {
      const movie = new MovieRental('childrens movie', CHILDREN_TYPE, 4);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(3);
      expect(rentalSummary.points).to.eq(1);
    });

    it('should calculate price and points - childrens movie - 5 days', () => {
      const movie = new MovieRental('childrens movie', CHILDREN_TYPE, 5);

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(4.5);
      expect(rentalSummary.points).to.eq(1);
    });
  });

  describe('Price and point calculation - Multiple movies', () => {
    it('should return correct price and points - one of each type - 1 day each', () => {
      const regularMovie = new MovieRental('regular movie', REGULAR_TYPE, 1);
      const newMovie = new MovieRental('new movie', NEW_TYPE, 1);
      const childrensMovie = new MovieRental('childrens movie', CHILDREN_TYPE, 1);

      const rentalSummary = calculateRentalSummary(regularMovie, newMovie, childrensMovie);

      expect(rentalSummary.price).to.eq(6.5);
      expect(rentalSummary.points).to.eq(3);
    });

    it('should return correct price and points - one of each type - different day each', () => {
      const regularMovie = new MovieRental('regular movie', REGULAR_TYPE, 1);
      const newMovie = new MovieRental('new movie', NEW_TYPE, 2);
      const childrensMovie = new MovieRental('childrens movie', CHILDREN_TYPE, 3);

      const rentalSummary = calculateRentalSummary(regularMovie, newMovie, childrensMovie);

      expect(rentalSummary.price).to.eq(9.5);
      expect(rentalSummary.points).to.eq(4);
    });

    it('should return correct price and points - given example', () => {
      const crazynotes = new MovieRental('Crazynotes', REGULAR_TYPE, 1);
      const teeth = new MovieRental('Teeth', REGULAR_TYPE, 2);
      const theWeb = new MovieRental('The Web', REGULAR_TYPE, 3);

      const rentalSummary = calculateRentalSummary(crazynotes, teeth, theWeb);

      expect(rentalSummary.price).to.eq(7.5);
      expect(rentalSummary.points).to.eq(3);
    });
  });
});
