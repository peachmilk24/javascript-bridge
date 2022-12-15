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
    if (isNaN(size)) {
      return;
    }
    this.bridgeGame.make(size);
    this.orderMoving();
  }

  orderMoving() {
    const direction = InputView.readMoving();
  }
}

module.exports = GameController;
