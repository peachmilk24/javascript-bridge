const BridgeSize = require('../src/model/BridgeSize');

describe('다리 사이즈 예외 테스트', () => {
  test('3~20 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize('1');
    }).toThrow('[ERROR]');
  });
  test('3~20 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize('-1');
    }).toThrow('[ERROR]');
  });
  test('3~20 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize(1);
    }).toThrow('[ERROR]');
  });
  test('3~20 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BridgeSize(21);
    }).toThrow('[ERROR]');
  });
  test('숫자가 아니면 에러가 발생한다', () => {
    expect(() => {
      new BridgeSize('가나다');
    }).toThrow('[ERROR]');
  });
  test('숫자가 아니면 에러가 발생한다', () => {
    expect(() => {
      new BridgeSize('');
    }).toThrow('[ERROR]');
  });
  test('숫자가 아니면 에러가 발생한다', () => {
    expect(() => {
      new BridgeSize('a');
    }).toThrow('[ERROR]');
  });
  test('자연수가 아니면 에러가 발생한다', () => {
    expect(() => {
      new BridgeSize(4.5);
    }).toThrow('[ERROR]');
  });
});
