var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    var key = keys[keys.length-1] + 1;
    storage[''+key] = value;
    return value;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var key = keys[0];
    var value = storage[key];
    delete storage[key];
    return value;
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};
