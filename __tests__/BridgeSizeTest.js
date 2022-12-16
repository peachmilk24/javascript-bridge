const BridgeSize = require('../src/model/BridgeSize');

describe('다리 사이즈 예외 테스트', () => {
  test.each([1, 2, -10, '1', '30', 21])(
    '3~20 사이의 수가 아니면 예외가 발생한다.',
    input => {
      expect(input => {
        new BridgeSize(input);
      }).toThrow('[ERROR]');
    },
  );
  test.each(['', ' ', 'one', '하나'])(
    '숫자가 아니면 예외가 발생한다.',
    input => {
      expect(input => {
        new BridgeSize(input);
      }).toThrow('[ERROR]');
    },
  );
  test.each([3.5, 10.0, 17.3])('정수가 아니면 예외가 발생한다.', input => {
    expect(input => {
      new BridgeSize(input);
    }).toThrow('[ERROR]');
  });
});
