const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeGame = require('../model/BridgeGame');

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
    this.orderMoving(bridge);
  }

  orderMoving(bridge) {
    const direction = InputView.readMoving();
    const moveResult = this.#bridgeGame.move(direction, bridge);
    const map = moveResult[0];
    OutputView.printMap(map);
  }
}

module.exports = GameController;
