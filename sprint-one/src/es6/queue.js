class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(val) {
    var keys = Object.keys(this.storage);
    var key = keys[key.length - 1] + 1;
    this.storage[key] = val;
    return val;
  }

  dequeue() {
    var keys = Object.keys(this.storage);
    var key = keys[0];
    var val = this.storage[key];
    delete this.storage[key];
    return val;
  }
}
