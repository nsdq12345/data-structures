describe('doublyLinkedList', function() {
    var testLinkedList;
  
    beforeEach(function() {
      testLinkedList = new DoublyLinkedList();
    });
  
    it('should have a head and tail', function() {
      expect(testLinkedList).to.have.property('head');
      expect(testLinkedList).to.have.property('tail');
    });
  
    it('should have methods named "addToHead", "removeTail", and "contains"', function() {
      expect(testLinkedList.addToHead).to.be.a('function');
      expect(testLinkedList.removeTail).to.be.a('function');
      expect(testLinkedList.contains).to.be.a('function');
    });
  
    //Bare minimum additional test
    it('contain method should not fail when linked list is empty', function() {
      expect(testLinkedList.contains(5)).to.equal(false);
    });
    
    it('should designate a new tail when new nodes are added', function() {
      testLinkedList.addToHead(4);
      expect(testLinkedList.tail.value).to.equal(4);
      testLinkedList.addToHead(5);
      expect(testLinkedList.tail.value).to.equal(4);
    });
  
    it('should remove the tail from the list when removeTail is called', function() {
      testLinkedList.addToHead(4);
      testLinkedList.addToHead(5);
      expect(testLinkedList.head.value).to.equal(5);
      expect(testLinkedList.tail.value).to.equal(4);
      testLinkedList.removeTail();
      expect(testLinkedList.head.value).to.equal(5);
      expect(testLinkedList.tail.value).to.equal(5);
    });
  
    it('should return the value of the former head when removeTail is called', function() {
      testLinkedList.addToHead(4);
      expect(testLinkedList.removeTail()).to.equal(4);
    });
  
    it('should contain a value that was added', function() {
      testLinkedList.addToHead(4);
      testLinkedList.addToHead(5);
      expect(testLinkedList.contains(4)).to.equal(true);
      expect(testLinkedList.contains(5)).to.equal(true);
      expect(testLinkedList.contains(6)).to.equal(false);
    });
  
    it('should not contain a value that was removed', function() {
      testLinkedList.addToHead(4);
      testLinkedList.addToHead(5);
      testLinkedList.removeTail();
      expect(testLinkedList.contains(4)).to.equal(false);
    });
  
    // add more tests here to test the functionality of testLinkedList
  });
  