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
}

module.exports = Player;
