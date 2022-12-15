const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  start() {
    OutputView.printStart();
    const size = InputView.readBridgeSize();
    this.bridgeGame.make(size);
  }
}

module.exports = GameController;
