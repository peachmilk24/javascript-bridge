const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  start() {
    OutputView.printStart();
    const size = InputView.readBridgeSize();
  }
}

module.exports = GameController;
