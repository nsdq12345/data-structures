

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // {storage of length 8, 3 funcs}
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // //while (this._storage.get(index) !== undefined) {
  //   this._limit = this._limit * 2;
  //   this._storage.limit = this._limit;
  //   index = getIndexBelowMaxForKey(k, this._limit);
  // //}
  if (!this._storage.get(index)) {
    this._storage.set(index, []);
    this._storage.get(index).push([k,v]);
  } else if (this._storage.get(index)) {
    var exists = false;
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
        exists = true;
      }
    }
    if (exists === false) {
      this._storage.get(index).push([k,v]);
    }
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index).length > 1) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }
  } else if (this._storage.get(index).length === 1) {
    return this._storage.get(index)[0][1];
  }
  //return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var removeFunc = function(value, ind, storage) {
    if (Array.isArray(storage[index])) {
      for (var i = storage[index].length - 1; i >= 0; i--) {
        if (storage[index][i][0] === k) {
          storage[index].splice(i, 1);
        }
      }
    }
  }
  this._storage.each(removeFunc);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


