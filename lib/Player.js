class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  getScore() {
    return this.score;
  }

  addScore() {
    this.score++;
  }

  getTennisScore() {
    if (this.score === 1) {
      return '15';
    } else if (this.score === 2) {
      return '30';
    } else if (this.score === 3) {
      return '40';
    }
  }
}

module.exports = Player;
