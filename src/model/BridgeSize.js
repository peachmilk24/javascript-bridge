class BridgeSize {
  #size;

  constructor(size) {
    this.#size = size;
    this.validate();
  }
}

module.exports = BridgeSize;
