var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  if (!parent) {
    newTree.parent = null;
  } else {
    newTree.parent = parent;
  }
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value, this);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var flag = false;
  function recurseContains(child){
    if (child.value === target) {
        flag = true;
    }
    if (child.children.length > 0) {
      for (var i = 0; i < child.children.length; i++) {
        recurseContains(child.children[i]);
      }
    }   
  }
  recurseContains(this);
  return flag;
};

treeMethods.removeFromParent = function () {
  var parent = this.parent;
  if (this.parent) {
    for (var i = parent.children.length - 1; i >= 0; i--) {
      if (parent.children[i].value === this.value) {
        parent.children.splice(i, 1);
      }
    }
    this.parent = null;
  }
}

treeMethods.traverse = function(cb) {
  cb.apply(this, [this.value]);

  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
}

treeMethods.print = function () {
  console.log("Tree Value: " + this.value);
  
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].print();
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
    addChild: O(1);
    contains: O(n);
 */
