const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const VALID_VALUE = require('../constant/ValidValue');
const Moving = require('./Moving');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #size;

  #bridge;

  #moving;

  #count;

  constructor() {
    this.#size = 0;
    this.#bridge = [];
    this.#moving = new Moving();
    this.#count = 1;
  }

  make(size) {
    this.#size = Number(size);
    this.#bridge = makeBridge(size, generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    if (direction === VALID_VALUE.DIRECTION.UP) {
      this.#moving.moveUp(direction, this.#bridge);
    }
    if (direction === VALID_VALUE.DIRECTION.DOWN) {
      this.#moving.moveDown(direction, this.#bridge);
    }
    return this.#moving.getMoving();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#moving = new Moving();
    this.#count += 1;
  }

  getCount() {
    return this.#count;
  }
}

module.exports = BridgeGame;
