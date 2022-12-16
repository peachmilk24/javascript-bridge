const MoveDirection = require('../src/model/MoveDirection');

describe('이동칸 입력 예외 테스트', () => {
  test.each([
    1,
    2,
    -10,
    '1',
    '30',
    21,
    'a',
    ' ',
    '',
    'u',
    'd',
    'UD',
    'DU',
    '가나다',
    'udd',
  ])('U 또는 D가 아니면 예외가 발생한다.', input => {
    expect(input => {
      new MoveDirection(input);
    }).toThrow('[ERROR]');
  });
});
