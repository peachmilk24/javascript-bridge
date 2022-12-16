const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeGame = require('../model/BridgeGame');
const ValidValue = require('../constant/ValidValue');

class GameController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  start() {
    OutputView.printStart();
    this.makeBridge();
  }

  makeBridge() {
    const size = InputView.readBridgeSize();
    const bridge = this.#bridgeGame.make(size);
    this.orderMoving(bridge, size);
  }

  orderMoving(bridge, size) {
    const direction = InputView.readMoving();
    const moveResult = this.#bridgeGame.move(direction, bridge);
    const map = moveResult[0];
    OutputView.printMap(map);
    this.checkResult(moveResult, size, bridge);
  }

  checkResult(moveResult, size, bridge) {
    const [map, result, position] = [...moveResult];
    if (result && position < +size) this.orderMoving(bridge, size);
    if (result && position === +size) OutputView.printResult(moveResult);
    if (!result) this.askRetry(bridge, size, moveResult);
  }

  askRetry(bridge, size, moveResult) {
    const command = InputView.readGameCommand();
    if (command === ValidValue.COMMAND.RETRY) {
      this.#bridgeGame.retry();
      this.orderMoving(bridge, size);
    }
    if (command === ValidValue.COMMAND.QUIT) {
      OutputView.printResult(moveResult);
    }
  }
}

module.exports = GameController;
