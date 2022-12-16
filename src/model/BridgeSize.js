const UserError = require('../../../../javascript-bridge/src/util/UserError');
const Error = require('../constant/ErrorMessage');
const ValidValue = require('../constant/ValidValue');

class BridgeSize {
  #size;

  constructor(size) {
    this.#size = +size;
    this.validate(size);
  }

  validate(size) {
    this.checkRange();
    this.isNumber(size);
  }

  checkRange() {
    if (
      this.#size >= ValidValue.SIZE.MIN &&
      this.#size <= ValidValue.SIZE.MAX
    ) {
      return;
    }
    throw new UserError(Error.SIZE_RANGE);
  }

  isNumber(size) {
    if (isNaN(size)) {
      throw new UserError(Error.NOT_NUMBER);
    }
  }
}

module.exports = BridgeSize;
