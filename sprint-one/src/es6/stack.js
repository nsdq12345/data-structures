class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  push(val) {
    var keys = Object.keys(this.storage);
    var key = keys.length;
    this.storage[key] = val;
    return val;
  }

  pop() {
    var keys = Object.keys(this.storage);
    var key = keys.length-1;
    var val = this.storage[key];
    delete this.storage[key];
    return val;
  }
}