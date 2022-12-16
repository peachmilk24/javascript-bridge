const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');

class GameController {
  start() {
    OutputView.printStart();
    this.makeBridge();
  }

  makeBridge() {
    const size = InputView.readBridgeSize();
  }
}

module.exports = GameController;
