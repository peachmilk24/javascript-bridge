class MovingState {
  #state;

  #result;

  #position;

  constructor() {
    this.#state = {
      Up: [],
      Down: [],
    };
    this.#result = true;
    this.#position = 0;
  }

  moveUp(direction, bridge) {
    if (this.checkDirection(direction, bridge)) {
      this.setStateUpO();
    }
    if (!this.checkDirection(direction, bridge)) {
      this.setStateUpX();
    }
    this.#position += 1;
  }

  moveDown(direction, bridge) {
    if (this.checkDirection(direction, bridge)) {
      this.setStateDownO();
    }
    if (!this.checkDirection(direction, bridge)) {
      this.setStateDownX();
    }
    this.#position += 1;
  }

  checkDirection(direction, bridge) {
    return direction === bridge[this.#position];
  }

  setStateUpO() {
    this.#state.Up.push(' O ');
    this.#state.Down.push('   ');
  }

  setStateUpX() {
    this.#state.Up.push(' X ');
    this.#state.Down.push('   ');
    this.#result = false;
  }

  setStateDownO() {
    this.#state.Up.push('   ');
    this.#state.Down.push(' O ');
  }

  setStateDownX() {
    this.#state.Up.push('   ');
    this.#state.Down.push(' X ');
    this.#result = false;
  }
}

module.exports = MovingState;
