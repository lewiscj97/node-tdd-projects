const expect = require('chai').expect;
const Tennis = require('../lib/Tennis');
const Player = require('../lib/Player');

describe('Tennis scores', () => {

  const player1 = new Player('Rodger');
  const player2 = new Player('Andy');

  const tennis = new Tennis(player1, player2);

  it('should be able to score for a player', () => {
    tennis.score(player1);

    const expected = 1;
    const score = player1.getScore();

    expect(expected).to.eq(score);
  });

  it('should give the score in tennis terms', () => {
    tennis.score(player1);
    tennis.score(player2);

    const expected = "15,15";
    const score = tennis.getScore();

    expect(expected).to.eq(score);
  });
});
