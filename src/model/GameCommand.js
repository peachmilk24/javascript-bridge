const VALID_VALUE = require('../constant/ValidValue');
const ERROR = require('../constant/ErrorMessage');
const UserError = require('../util/UserError');

class GameCommand {
  #command;

  constructor(command) {
    this.#command = command;
    this.validate();
  }

  validate() {
    this.checkInput();
  }

  checkInput() {
    if (
      this.#command === VALID_VALUE.COMMAND.RETRY ||
      this.#command === VALID_VALUE.COMMAND.QUIT
    ) {
      return;
    }
    throw new UserError(ERROR.COMMAND);
  }
}

module.exports = GameCommand;
