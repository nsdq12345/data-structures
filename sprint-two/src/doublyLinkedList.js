var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
}

DoublyLinkedList.prototype.Node = function(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

DoublyLinkedList.prototype.addToHead = function(value) {
    var oldHead = this.head; //null
    var newHead = new this.Node(value); // 4
    newHead.next = oldHead; // null
    if (oldHead) {
        oldHead.prev = newHead;
    }
    this.head = newHead;
    if (this.tail === null) {
        this.tail = newHead;
    }
}

DoublyLinkedList.prototype.removeTail = function() {
    if (this.tail === null) {
        return null;
    } else if (this.tail.prev === null) {
        var tailVal = this.tail.value;
        this.head = null;
        this.tail = null;
        return tailVal;
    }
    var newTail = this.tail.prev;
    var val = this.tail.value;
    newTail.next = null;
    this.tail = newTail;
    return val;
}

DoublyLinkedList.prototype.contains = function(target) {
    if (this.head === null) {
        return false;
    }
    var nodeContains = function (node) {
        if (node.value === target) {
            return true;
        } else if (node.next === null) {
            return false;
        } else {
            return nodeContains(node.next);
        }
    }
    return nodeContains(this.head);
};