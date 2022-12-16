const UserError = require('../../../../javascript-bridge/src/util/UserError');
const Error = require('../constant/ErrorMessage');
const ValidValue = require('../constant/ValidValue');

class BridgeSize {
  #size;

  constructor(size) {
    this.#size = +size;
    this.validate();
  }

  validate() {
    this.checkRange();
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
}

module.exports = BridgeSize;
