class Tennis {

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getScore() {
    if (this.player1.getScore() > 3 && this.player2.getScore() === 3) {
      return `Advantage ${this.player1.getName()}!`;
    } else if (this.player1.getScore() === 3 && this.player2.getScore() === 3) {
      return 'Deuce!';
    } else if (this.player1.getScore() === 4) {
      return `${this.player1.getName()} wins!`;
    } else if (this.player2.getScore() === 4) {
      return `${this.player2.getName()} wins!`;
    } else {
      return `${this.player1.getTennisScore()},${this.player2.getTennisScore()}`;
    }
  }

  score(player) {
    player.addScore();
  }
}
module.exports = Tennis;
