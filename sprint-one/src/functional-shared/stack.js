var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};

  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {};


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

stackMethods.size = function () {
  var keys = Object.keys(this.storage);
  return keys.length;
};