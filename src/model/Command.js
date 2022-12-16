const ValidValue = require('../constant/ValidValue');
const UserError = require('../util/UserError');
const Error = require('../constant/ErrorMessage');

class Command {
  #command;

  constructor(command) {
    this.#command = command;
    this.validate();
  }

  validate() {
    this.checkCharacter();
  }

  checkCharacter() {
    if (
      this.#command === ValidValue.COMMAND.RETRY ||
      this.#command === ValidValue.COMMAND.QUIT
    ) {
      return;
    }
    throw new UserError(Error.COMMAND);
  }
}

module.exports = Command;
