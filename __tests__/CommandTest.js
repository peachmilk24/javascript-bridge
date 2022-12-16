const Command = require('../src/model/Command');

describe('재시작 여부 입력 예외 테스트', () => {
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
    'r',
    'q',
    'RQ',
    'QR',
    '가나다',
    'rqq',
  ])('R 또는 Q가 아니면 예외가 발생한다.', input => {
    expect(input => {
      new Command(input);
    }).toThrow('[ERROR]');
  });
});
