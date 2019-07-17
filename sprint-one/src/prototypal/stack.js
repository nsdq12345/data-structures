var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = Object.create(stackMethods);
  newStack.storage = {};

  return newStack;
};

var stackMethods = {};

stackMethods.size = function () {
  return Object.keys(this.storage).length;
};

stackMethods.push = function (val) {
  var keys = Object.keys(this.storage);
  var key = keys.length;
  this.storage[key] = val;
  return val;
};

stackMethods.pop = function () {
  var keys = Object.keys(this.storage);
  var key = keys.length - 1;

  var value = this.storage[key];
  delete this.storage[key];
  return value;
};