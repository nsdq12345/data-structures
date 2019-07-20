var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.methods);

  bst.left = null;
  bst.right = null;
  bst.value = value;

  return bst;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value) {
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }

  if (this.getMaxDepth() > (2 * this.getMinDepth())) {
    var newRoot = this.balance();
    this.value = newRoot.value;
    this.left = newRoot.left;
    this.right = newRoot.right;
  }
}

BinarySearchTree.methods.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if (this.right) {
      return this.right.contains(value);
    }
  }

  return false;
}

BinarySearchTree.methods.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
}

BinarySearchTree.methods.breadthFirstLog = function(cb) {
  var queue = [];
  queue.push(this);
  while(queue.length > 0) {
    var current = queue[0];
    if (current.left){
      queue.push(current.left);
    } 
    if (current.right){
      queue.push(current.right);
    }
    cb(current.value);
    queue.splice(0,1);
  }
}

BinarySearchTree.methods.balance = function() {
  // var maxDepth = this.getMaxDepth();
  // var minDepth = this.getMinDepth();

  var sortedArray = [];
  var getSortedArray = function(node) {
    if (node.left) {
      getSortedArray(node.left);
    }

    sortedArray.push(node.value);

    if (node.right) {
      getSortedArray(node.right);
    }
  }
  getSortedArray(this);

  var newRoot;// = new BinarySearchTree()

 
  var halfArray = function(array) {
    
    var midpoint = Math.floor(array.length/2);

    if (!newRoot) {
      newRoot = BinarySearchTree(array[midpoint]);
    } else {
      newRoot.insert[array[midpoint]];
    }
    
    if (array.length > 1) {
      var leftArray = array.slice(0,midpoint);
      halfArray(leftArray);
      var rightArray = array.slice((midpoint+1));
      halfArray(rightArray);
    }
    
  }

  halfArray(sortedArray);
  return newRoot;
}



BinarySearchTree.methods.getMinDepth = function() {
  var minDepthFound = this.getMaxDepth(this);
  
  var traverseDepth = function(node, currentDepth) {
    if (node.left) {
      currentDepth++;
      traverseDepth(node.left, currentDepth);
    }
    if (node.right) {
      currentDepth++;
      traverseDepth(node.right, currentDepth);
    }

    if (!node.left && !node.right) {
      if (currentDepth < minDepthFound) {
        minDepthFound = currentDepth;
      }
    }
  }
  
  traverseDepth(this, 1);

  return minDepthFound;
}

BinarySearchTree.methods.getMaxDepth = function() {
  var maxDepthFound = 1;

  var traverseDepth = function (node, currentDepth) {
    if (node.left) {
      currentDepth++;

      if (currentDepth > maxDepthFound) {
        maxDepthFound = currentDepth;
      }
    
      traverseDepth(node.left, currentDepth);
    }

    if (node.right) {
      currentDepth++;

      if (currentDepth > maxDepthFound) {
        maxDepthFound = currentDepth;
      }
    
      traverseDepth(node.right, currentDepth);
    }
  };

  traverseDepth(this, maxDepthFound);
  return maxDepthFound;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
