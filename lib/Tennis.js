class Tennis {

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getScore() {
    const player1Score = this.player1.getScore();
    const player2Score = this.player2.getScore();
    const player1Name = this.player1.getName();
    const player2Name = this.player2.getName();

    if (player1Score > 3 && player1Score === player2Score + 1) {
      return `Advantage ${player1Name}!`;
    } if (player2Score > 3 && player2Score === player1Score + 1) {
      return `Advantage ${player2Name}!`;
    } else if (player1Score === player2Score && player1Score >= 3) {
      return 'Deuce!';
    } else if (player1Score >= 4 && player1Score >= this.player2.score + 2) {
      return `${player1Name} wins!`;
    } else if (player2Score >= 4 && player2Score >= this.player1.score + 2) {
      return `${player2Name} wins!`;
    } else {
      return `${this.player1.getTennisScore()},${this.player2.getTennisScore()}`;
    }
  }

  score(player) {
    player.addScore();
  }
}
module.exports = Tennis;
