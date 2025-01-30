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
    }
  }
}

module.exports = Player;
