const expect = require('chai').expect;
const Tennis = require('../lib/Tennis');
const Player = require('../lib/Player');

describe('Tennis scores', () => {

  const tennis = new Tennis();
  const player1 = new Player('Rodger');
  const player2 = new Player('Andy');

  it('should be able to score for a player', () => {
    tennis.score(player1);

    const expected = 1;
    const score = player1.getScore();

    expect(expected).to.eq(score);
  });
});
