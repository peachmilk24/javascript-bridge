const { Console } = require('@woowacourse/mission-utils');
const Message = require('../constant/PrintMessage');
const BridgeSize = require('../model/BridgeSize');
const Direction = require('../model/Direction');
const Retry = require('../model/Retry');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let size = 0;
    Console.readLine(Message.INPUT_LENGTH, answer => {
      try {
        const bridgeSize = new BridgeSize(Number(answer));
      } catch (error) {
        Console.print(error.message);
        this.readBridgeSize();
      }
      size = answer;
    });
    return size;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let direction = '';
    Console.readLine(Message.MOVE, answer => {
      try {
        const orderDirection = new Direction(answer);
      } catch (error) {
        Console.print(error.message);
        this.readMoving();
      }
      direction = answer;
    });
    return direction;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
