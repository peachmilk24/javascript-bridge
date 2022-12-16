const { Console } = require('@woowacourse/mission-utils');
const UserError = require('../../../../javascript-bridge/src/util/UserError');
const MoveDirection = require('../model/MoveDirection');
const Message = require('../constant/PrintMessage');
const BridgeSize = require('../model/BridgeSize');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let size = 0;
    Console.readLine(Message.INPUT_SIZE, answer => {
      this.validateSize(answer);
      Console.print(answer);
      size = answer;
    });
    return size;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let direction = '';
    Console.readLine(Message.INPUT_DIRECTION, answer => {
      this.validateDirection(answer);
      Console.print(answer);
      direction = answer;
    });
    return direction;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  validateSize(size) {
    try {
      const inputSize = new BridgeSize(size);
    } catch (error) {
      this.isUserError(error);
      Console.print(error.message);
      this.readBridgeSize();
    }
  },

  validateDirection(direction) {
    try {
      const inputDirection = new MoveDirection(direction);
    } catch (error) {
      this.isUserError(error);
      Console.print(error.message);
      this.readMoving();
    }
  },

  isUserError(error) {
    if (error instanceof UserError) {
      return;
    }
    throw error;
  },
};

module.exports = InputView;
