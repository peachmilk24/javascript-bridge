const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');

class GameController {
  start() {
    OutputView.printStart();
  }
}

module.exports = GameController;
