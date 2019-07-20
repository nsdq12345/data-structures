

var HashTableAdvanced = function() {
  this._limit = 8;
  this._fixedLimit = this._limit;
  this._expandCounter = 1;
  this._size = 0;
  this._storage = LimitedArray(this._fixedLimit); // {storage of length 8, 3 funcs}
};

HashTableAdvanced.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._fixedLimit*1);

  for (var i = 1; i < this._expandCounter; i++) {
    index = getIndexBelowMaxForKey(''+index, this._fixedLimit*(i+1));
  }

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
  this._size++;
  //var counter = 0;

  // var checkSize = function(bucket) {
  //     if (bucket) {
  //       counter += bucket.length;
  //     }
  // }
  // this._storage.each(checkSize);
  if ((this._size / (this._fixedLimit * this._expandCounter)) >= .75) {
    this._storage = this.expand();
  }
};

HashTableAdvanced.prototype.expand = function() {
  var newHashTable = LimitedArray(this._fixedLimit*(this._expandCounter+1));
  
  var limit = this._fixedLimit;
  var expandCounter = this._expandCounter;

  var expansion = function(bucket, i) {
    //callback(storage[i], i, storage);
    if (bucket) {
      var index = getIndexBelowMaxForKey(''+i, limit*(expandCounter+1));

      for (var i = 0; i < bucket.length; i++) {
        if (!newHashTable.get(index)) {
          newHashTable.set(index, []);
        }
        newHashTable.get(index).push(bucket[i]);
      }
    }
  };
  this._storage.each(expansion);
  
  this._expandCounter++;
  this._limit = this._limit * this._expandCounter;

  return newHashTable;
}

HashTableAdvanced.prototype.retrieve = function(k) {

  var index = getIndexBelowMaxForKey(k, this._fixedLimit*1);
  
  for (var i = 1; i < this._expandCounter; i++) {
    index = getIndexBelowMaxForKey(''+index, this._fixedLimit*(i+1));
  }
  
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTableAdvanced.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._fixedLimit);
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

  this._size--;
  if (((this._size / this._limit) <= .25) && this._limit != this._fixedLimit) {
    this._storage = this.shrink();
  }
};

HashTableAdvanced.prototype.shrink = function() {
  var newHashTable = LimitedArray(this._limit/2);

  var fixedLimit = this._fixedLimit;
  var expandCounter = this._expandCounter;

  var shrinkage = function(bucket, i, storage) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
          var key = bucket[i][0];
          var index = getIndexBelowMaxForKey(key, this.fixedLimit);

          for (var i = 1; i < this.expandCounter - 1; i++) {
            index = getIndexBelowMaxForKey(index, this.fixedLimit * (this.expandCounter - 1));
          }

          if (!newHashTable.get(index)) {
            newHashTable.set(index, []);
          }

          newHashTable.get(index).push(bucket[i]);
      }
    }
  };

  this._storage.each(shrinkage);  

  this._limit = this._limit/2;
  this._expandCounter--;

  return newHashTable;
}

HashTableAdvanced.prototype.print = function() {

  for (var i = 0; i < this._fixedLimit; i++) {
    if (this._storage.get(i)) {
      for (var x = 0; x < this._storage.get(i).length; x++) {
        console.log("Bucket: " + i + " Values: " + this._storage.get(i));
      }
    }
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */


