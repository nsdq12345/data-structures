var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function (val) {
  var keys = Object.keys(this.storage);
  var key = keys[keys.length - 1];
  this.storage[key + 1] = val;
  return val;
};

queueMethods.dequeue = function (val) { 
  var keys = Object.keys(this.storage);
  var key = keys[0];
  var value = this.storage[key];
  delete this.storage[key];
  return value;
};

queueMethods.size = function (val) {
  var keys = Object.keys(this.storage);
  return keys.length;
};