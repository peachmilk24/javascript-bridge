const GameCommand = require('../src/model/GameCommand');

describe('이동칸 예외 테스트', () => {
  test('R 또는 Q가 아닌 모든 경우', () => {
    expect(() => {
      new GameCommand('1');
    }).toThrow('[ERROR]');
  });
  test('R 또는 Q가 아닌 모든 경우', () => {
    expect(() => {
      new GameCommand(4);
    }).toThrow('[ERROR]');
  });
  test('R 또는 Q가 아닌 모든 경우', () => {
    expect(() => {
      new GameCommand('');
    }).toThrow('[ERROR]');
  });
  test('R 또는 Q가 아닌 모든 경우', () => {
    expect(() => {
      new GameCommand('a');
    }).toThrow('[ERROR]');
  });
  test('R 또는 Q가 아닌 모든 경우', () => {
    expect(() => {
      new GameCommand('r');
    }).toThrow('[ERROR]');
  });
  test('R 또는 Q가 아닌 모든 경우', () => {
    expect(() => {
      new GameCommand('q');
    }).toThrow('[ERROR]');
  });
  test('R 또는 Q가 아닌 모든 경우', () => {
    expect(() => {
      new GameCommand(' ');
    }).toThrow('[ERROR]');
  });
  test('R 또는 Q가 아닌 모든 경우', () => {
    expect(() => {
      new GameCommand('RQ');
    }).toThrow('[ERROR]');
  });
});
