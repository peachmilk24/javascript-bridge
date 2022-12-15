const GameController = require('./controller/GameController');

class App {
  play() {
    const bridgeGame = new GameController();
    bridgeGame.start();
  }
}

module.exports = App;
