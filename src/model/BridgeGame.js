const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const ValidValue = require('../constant/ValidValue');
const MovingState = require('./MovingState');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #movingState;

  #count;

  constructor() {
    this.#bridge = [];
    this.#movingState = new MovingState();
    this.#count = 1;
  }

  make(size) {
    this.#bridge = makeBridge(size, generate);
    console.log('make', this.#bridge);
    return this.#bridge;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction, bridge) {
    let moveResult;
    console.log(direction, bridge, moveResult);
    if (direction === ValidValue.DIRECTION.UP) {
      moveResult = this.#movingState.moveUp(direction, bridge);
    }
    if (direction === ValidValue.DIRECTION.DOWN) {
      moveResult = this.#movingState.moveDown(direction, bridge);
    }
    return moveResult;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#movingState = new MovingState();
    this.#count += 1;
  }
}

module.exports = BridgeGame;
