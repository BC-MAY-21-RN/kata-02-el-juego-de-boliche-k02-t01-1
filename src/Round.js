class Round {
  constructor(firstTried = -1, secondTried = -1) {
    this.firstTried = firstTried;
    this.secondTried = secondTried;
    this.roundValue = 0;
  }

  getRoundValue() {
    return this.firstTried + this.secondTried;
  }

  setTriedValue(value) {
    if (this.firstTried === -1) {
      this.firstTried = value;
    } else if (this.firstTried === 10) {
      this.secondTried = 0;
    } else {
      this.secondTried = value;
    }
  }

  isStrike(bonus) {
    this.roundValue = bonus + 10;
  }

  getRound() {
    return {
      firstTried: this.firstTried,
      secondTried: this.secondTried,
    };
  }

  getFullRound() {
    return {
      firstTried: this.firstTried,
      secondTried: this.secondTried,
      roundValue: this.getRoundValue(),
    };
  }
}

module.exports = {
  Round,
};
