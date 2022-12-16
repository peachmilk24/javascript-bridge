const { Console } = require('@woowacourse/mission-utils');
const Message = require('../constant/PrintMessage');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveResult) {
    const mapUp = moveResult[0].Up.join('|');
    const mapDown = moveResult[0].Down.join('|');
    Console.print(`[${mapUp}]`);
    Console.print(`[${mapDown}]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(moveResult, count) {
    Console.print(Message.FINAL);
    this.printMap(moveResult);
    this.printSuccess(moveResult[1]);
    this.printTryCount(count);
  },

  printSuccess(success) {
    if (success) {
      Console.print(`${Message.RESULT}${Message.SUCCESS}`);
    }
    if (!success) {
      Console.print(`${Message.RESULT}${Message.FAIL}`);
    }
  },

  printTryCount(count) {
    Console.print(`${Message.TRY_COUNT}${count}회`);
  },

  printStart() {
    Console.print(Message.START);
  },
};

module.exports = OutputView;
