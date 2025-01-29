const expect = require('chai').expect;
const { calculateRentalSummary } = require('../lib/index');

describe('Video store', () => {
  describe('Price and point calculation, single rental', () => {
    it('should calculate price and points - regular movie - 1 day', () => {
      const movie = {
        name: 'Crazynotes',
        type: 'regular',
        days: 1
      }

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(2.0);
      expect(rentalSummary.points).to.eq(1);
    });

    it('should calculate price and points - regular movie - 2 days', () => {
      const movie = {
        name: 'Crazynotes',
        type: 'regular',
        days: 2
      }

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(2.0);
      expect(rentalSummary.points).to.eq(1);
    });

    it('should calculate price and points - regular movie - 3 days', () => {
      const movie = {
        name: 'Crazynotes',
        type: 'regular',
        days: 3
      }

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(3.5);
      expect(rentalSummary.points).to.eq(1);
    });
  });
});
