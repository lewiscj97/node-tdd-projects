class Tennis {

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getScore() {
    const player1Name = this.player1.getName();
    const player2Name = this.player2.getName();

    if (this.hasAdvantage(this.player1, this.player2)) {
      return `Advantage ${player1Name}!`;
    } if (this.hasAdvantage(this.player2, this.player1)) {
      return `Advantage ${player2Name}!`;
    } else if (this.isDeuce()) {
      return 'Deuce!';
    } else if (this.hasWinner(this.player1, this.player2)) {
      return `${player1Name} wins!`;
    } else if (this.hasWinner(this.player2, this.player1)) {
      return `${player2Name} wins!`;
    } else {
      return `${this.player1.getTennisScore()},${this.player2.getTennisScore()}`;
    }
  }

  hasWinner(playerA, playerB) {
    return (playerA.getScore() >= 4 && playerA.getScore() >= playerB.getScore() + 2);
  }

  isDeuce() {
    return (this.player1.getScore() === this.player2.getScore() && this.player1.getScore() >= 3);
  }

  hasAdvantage(playerA, playerB) {
    return (playerA.getScore() > 3 && playerA.getScore() === playerB.getScore() + 1);
  }

  score(player) {
    player.addScore();
  }
}
module.exports = Tennis;
