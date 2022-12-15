const Direction = require('../src/model/Direction');

describe('이동칸 예외 테스트', () => {
  test('U 또는 D가 아닌 모든 경우', () => {
    expect(() => {
      new Direction('1');
    }).toThrow('[ERROR]');
  });
  test('U 또는 D가 아닌 모든 경우', () => {
    expect(() => {
      new Direction(4);
    }).toThrow('[ERROR]');
  });
  test('U 또는 D가 아닌 모든 경우', () => {
    expect(() => {
      new Direction('');
    }).toThrow('[ERROR]');
  });
  test('U 또는 D가 아닌 모든 경우', () => {
    expect(() => {
      new Direction('a');
    }).toThrow('[ERROR]');
  });
  test('U 또는 D가 아닌 모든 경우', () => {
    expect(() => {
      new Direction('u');
    }).toThrow('[ERROR]');
  });
  test('U 또는 D가 아닌 모든 경우', () => {
    expect(() => {
      new Direction('d');
    }).toThrow('[ERROR]');
  });
  test('U 또는 D가 아닌 모든 경우', () => {
    expect(() => {
      new Direction(' ');
    }).toThrow('[ERROR]');
  });
  test('U 또는 D가 아닌 모든 경우', () => {
    expect(() => {
      new Direction('UD');
    }).toThrow('[ERROR]');
  });
});
