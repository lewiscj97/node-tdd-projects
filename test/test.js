const expect = require('chai').expect;
const Tennis = require('../lib/Tennis');
const Player = require('../lib/Player');

describe('Tennis scores', () => {

  let player1;
  let player2;
  let tennis;

  beforeEach(() => {
    player1 = new Player('Rodger');
    player2 = new Player('Andy');
    tennis = new Tennis(player1, player2);
  });

  it('should be able to score for a player', () => {
    tennis.score(player1);

    const expected = 1;
    const score = player1.getScore();

    expect(expected).to.eq(score);
  });

  it('should give the score in tennis terms, 15 all', () => {
    tennis.score(player1);
    tennis.score(player2);

    const expected = '15,15';
    const score = tennis.getScore();

    expect(expected).to.eq(score);
  });

  it('should give the score in tennis terms, 30 15', () => {
    tennis.score(player1);
    tennis.score(player1);

    tennis.score(player2);

    const expected = '30,15';
    const score = tennis.getScore();

    expect(expected).to.eq(score);
  });

  it('should give the score in tennis terms, 40 15', () => {
    tennis.score(player1);
    tennis.score(player1);
    tennis.score(player1);

    tennis.score(player2);

    const expected = '40,15';
    const score = tennis.getScore();

    expect(expected).to.eq(score);
  });

  it('should give the score in tennis terms, 40 0', () => {
    tennis.score(player1);
    tennis.score(player1);
    tennis.score(player1);

    const expected = '40,0';
    const score = tennis.getScore();

    expect(expected).to.eq(score);
  });

  it('should say if player 1 has won game', () => {
    tennis.score(player1);
    tennis.score(player1);
    tennis.score(player1);
    tennis.score(player1);

    const expected = 'Rodger wins!';
    const score = tennis.getScore();

    expect(expected).to.eq(score);
  });

  it('should say if player 2 has won game', () => {
    tennis.score(player2);
    tennis.score(player2);
    tennis.score(player2);
    tennis.score(player2);

    const expected = 'Andy wins!';
    const score = tennis.getScore();

    expect(expected).to.eq(score);
  });

  it('should say deuce if points are equal at 40', () => {
    tennis.score(player1);
    tennis.score(player1);
    tennis.score(player1);

    tennis.score(player2);
    tennis.score(player2);
    tennis.score(player2);

    const expected = 'Deuce!';
    const score = tennis.getScore();

    expect(expected).to.eq(score);
  });

  it('should say advantage for player 1', () => {
    tennis.score(player1);
    tennis.score(player1);
    tennis.score(player1);

    tennis.score(player2);
    tennis.score(player2);
    tennis.score(player2);

    tennis.score(player1);

    const expected = `Advantage ${player1.getName()}!`;
    const score = tennis.getScore();

    expect(expected).to.eq(score);
  });

  // TODO: return to deuce

  // TODO: win from deuce

});
