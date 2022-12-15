const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');
const { printResult } = require('../view/OutputView');
const OutputView = require('../view/OutputView');

class GameController {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  start() {
    console.log('start');
    OutputView.printStart();
    const size = InputView.readBridgeSize();
    if (isNaN(size)) {
      return;
    }
    this.bridgeGame.make(size);
    this.orderMoving(size);
  }

  orderMoving(size) {
    const direction = InputView.readMoving();
    const moveResult = this.bridgeGame.move(direction);
    OutputView.printMap(moveResult);
    this.checkResult(moveResult, size);
  }

  checkResult(moveResult, size) {
    if (moveResult[1] === true && moveResult[2] < +size) {
      this.orderMoving(size);
    }
  }
}

module.exports = GameController;
