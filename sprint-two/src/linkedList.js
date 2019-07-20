var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail == null) {
      var node = Node(value);
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = Node(value);
      list.tail = Node(value);
    }
  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {

    if (!list.head) {
      return false;
    }

    if (list.head.value === target) {
      return true;
    } else if (list.head.next != null) {
      return nodeContains(list.head.next);
    } else {
      return false;
    }

    function nodeContains(node) {
      if (node.value === target) {
        return true;
      } else if (node.next != null){
        nodeContains(node.next);
      } else {
        return false;
      }
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
 
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */