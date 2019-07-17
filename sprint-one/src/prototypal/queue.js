var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function (val) {
  var keys = Object.keys(this.storage);
  var key = keys[keys.length - 1] + 1;
  this.storage[key] = val;
  return val;
};

queueMethods.dequeue = function () {
  var keys = Object.keys(this.storage);
  var key = keys[0];
  var value = this.storage[key];
  delete this.storage[key];

  return value;
};
