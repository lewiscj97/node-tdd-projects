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
    switch (this.score) {
      case 0:
        return '0';
      case 1:
        return '15';
      case 2:
        return '30';
      case 3:
        return '40';
      default:
        return '0';
    }
  }
}

module.exports = Player;
