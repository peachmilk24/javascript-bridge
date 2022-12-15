const { Console } = require('@woowacourse/mission-utils');
const Message = require('../constant/InputMessage');
const BridgeSize = require('../model/BridgeSize');
const UserError = require('../util/UserError');
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
      size = answer;
    });
    Console.print(size);
    return size;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},

  validateSize(size) {
    try {
      const inputSize = new BridgeSize(size);
    } catch (error) {
      this.checkUserError(error);
      Console.print(error);
      this.readBridgeSize();
    }
  },

  checkUserError(error) {
    if (error instanceof UserError) {
      return;
    }
    throw error;
  },
};

module.exports = InputView;
