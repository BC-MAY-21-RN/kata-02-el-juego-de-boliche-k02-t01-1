/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
const { Round } = require('./Round');

class Game {
  constructor() {
    this.game = [];
    this.strikes = [];
  }

  setRound() {
    for (let rounds = 1; rounds < 3; rounds++) {
      const round = new Round();
      for (let trieds = 0; trieds < 2; trieds++) {
        const maxValue = round.firstTrie === -1 ? 10 : 10 - round.firstTrie;
        round.setTrieValue(this.generateRoundValue(0, maxValue));
      }
      this.game.push({
        rounds,
        round,
      });
    }
  }

  generateRoundValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  printGame() {
    for (let index = 0; index < this.game.length; index++) {
      // eslint-disable-next-line no-console
      console.log(this.game[index].rounds, this.game[index].round.getFullRound());
    }
  }
}

const game = new Game();
game.setRound();
game.printGame();

module.exports = {
  Game,
};
