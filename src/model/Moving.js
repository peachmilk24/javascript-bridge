class Moving {
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
    console.log(direction, bridge);
    if (this.checkRightResult(direction, bridge)) {
      this.setStateUpO();
      return;
    }
    this.setStateUpX();
  }

  moveDown(direction, bridge) {
    console.log(direction, bridge);
    if (this.checkRightResult(direction, bridge)) {
      this.setStateDownO();
      return;
    }
    this.setStateDownX();
  }

  checkRightResult(direction, bridge) {
    return direction === bridge[this.#position];
  }

  setStateUpO() {
    this.#state.Up.push(' O ');
    this.#state.Down.push('   ');
    this.#position += 1;
  }

  setStateUpX() {
    this.#state.Up.push(' X ');
    this.#state.Down.push('   ');
    this.#result = false;
  }

  setStateDownO() {
    this.#state.Up.push('   ');
    this.#state.Down.push(' O ');
    this.#position += 1;
  }

  setStateDownX() {
    this.#state.Up.push('   ');
    this.#state.Down.push(' X ');
    this.#result = false;
  }

  getMoving() {
    return [this.#state, this.#result, this.#position];
  }
}

module.exports = Moving;
