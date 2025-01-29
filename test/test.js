const expect = require('chai').expect;
const { calculateRentalSummary } = require('../lib/index');

describe('Video store', () => {
  describe('Price and point calculation', () => {
    it('should calculate price and points for a regular movie for 1 day', () => {
      const movie = {
        name: 'Crazynotes',
        type: 'regular',
        days: 1
      }

      const rentalSummary = calculateRentalSummary(movie);

      expect(rentalSummary.price).to.eq(2.0);
      expect(rentalSummary.points).to.eq(1);
    });
  });
});
