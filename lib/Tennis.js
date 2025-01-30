class Tennis {

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getScore() {
    return `${this.player1.getTennisScore()},${this.player2.getTennisScore()}`;
  }

  score(player) {
    player.addScore();
  }
}
module.exports = Tennis;
