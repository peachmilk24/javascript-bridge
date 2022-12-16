const ValidValue = require('../constant/ValidValue');
const UserError = require('../util/UserError');
const Error = require('../constant/ErrorMessage');

class MoveDirection {
  #direction;

  constructor(direction) {
    this.#direction = direction;
    this.validate();
  }

  validate() {
    this.checkCharacter();
  }

  checkCharacter() {
    if (
      this.#direction === ValidValue.DIRECTION.UP ||
      this.#direction === ValidValue.DIRECTION.DOWN
    ) {
      return;
    }
    throw new UserError(Error.DIRECTION);
  }
}

module.exports = MoveDirection;
