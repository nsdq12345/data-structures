var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var keys = Object.keys(storage);
    var key = keys.length;
    storage['' + key] = value;
    return value;
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage);
    var key = keys.length-1;
    var poppedValue = storage[''+key];
    console.log("TryingToDelete:" + storage['' + key] + " Key:" + key);
    delete storage[''+key];
    return poppedValue;
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};