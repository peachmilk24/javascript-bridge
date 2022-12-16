const GameController = require('./controller/GameController');

class App {
  constructor() {
    this.controller = new GameController();
  }

  play() {
    this.controller.start();
  }
}

module.exports = App;
