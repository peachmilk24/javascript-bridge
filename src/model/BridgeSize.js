const VALID_VALUE = require('../constant/ValidValue');
const ERROR = require('../constant/ErrorMessage');
const UserError = require('../util/UserError');

class BridgeSize {
  #size;

  constructor(size) {
    this.#size = Number(size);
    this.validate(size);
  }

  validate(size) {
    this.checkRange();
    this.isNumber(size);
    this.isNaturalNumber();
  }

  checkRange() {
    if (
      this.#size >= VALID_VALUE.SIZE.MIN &&
      this.#size <= VALID_VALUE.SIZE.MAX
    ) {
      return;
    }
    throw new UserError(ERROR.RANGE);
  }

  isNumber(size) {
    if (isNaN(size)) {
      throw new UserError(ERROR.NUMBER);
    }
  }

  isNaturalNumber() {
    if (this.#size % 1 !== 0) {
      throw new UserError(ERROR.NATURAL_NUMBER);
    }
  }
}

module.exports = BridgeSize;
