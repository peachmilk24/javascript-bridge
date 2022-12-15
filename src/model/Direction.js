const UserError = require('../util/UserError');
const VALID_VALUE = require('../constant/ValidValue');
const ERROR = require('../constant/ErrorMessage');

class Direction {
  #direction;

  constructor(direction) {
    this.#direction = direction;
    this.validate();
  }

  validate() {
    this.checkInput();
  }

  checkInput() {
    if (
      this.#direction === VALID_VALUE.DIRECTION.UP ||
      this.#direction === VALID_VALUE.DIRECTION.DOWN
    ) {
      return;
    }
    throw new UserError(ERROR.DIRECTION);
  }
}

module.exports = Direction;
