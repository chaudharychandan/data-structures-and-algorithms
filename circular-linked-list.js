const ListEmpty = "ListEmpty";

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}

CircularLinkedList.prototype.add = function(item) {
  const node = new Node(item);
  if (this.head === null) {
    this.head = node;
    node.next = this.head;
  } else {
    const first = this.head.data;
    this.head.data = node.data;
    node.data = first;
    node.next = this.head.next;
    this.head.next = node;
    this.head = node;
  }
  this.length += 1;
};

CircularLinkedList.prototype.delete = function() {
  if(this.isEmpty()) throw ListEmpty;
  if(this.length === 1) {
    this.head = null;
  } else {
    this.head.data = this.head.next.data;
    this.head.next = this.head.next.next;
  }
  this.length -= 1;
}

CircularLinkedList.prototype.peek = function() {
  if(this.isEmpty()) throw ListEmpty;
  return this.head.data;
}

CircularLinkedList.prototype.isEmpty = function() {
  return this.length === 0;
}

module.exports = CircularLinkedList;
