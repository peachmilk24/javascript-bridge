const { Console } = require('@woowacourse/mission-utils');
const Message = require('../constant/PrintMessage');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(Message.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map) {
    const mapUp = `[${map.Up.join('|')}]`;
    const mapDown = `[${map.Down.join('|')}]`;
    Console.print(mapUp);
    Console.print(mapDown);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(moveResult, count) {
    const [map, result] = [...moveResult];
    this.printFinalMap(map);
    this.printFinalResult(result);
    this.printTrysCount(count);
  },

  printFinalMap(map) {
    Console.print(Message.FINAL_MAP);
    this.printMap(map);
  },

  printFinalResult(result) {
    let successResult = '';
    if (result === true) {
      successResult = Message.SUCCESS;
    }
    if (result === false) {
      successResult = Message.FAIL;
    }
    Console.print(`${Message.RESULT}${successResult}`);
  },

  printTrysCount(count) {
    Console.print(`${Message.TRY_COUNT}${count} 회`);
  },
};

module.exports = OutputView;
