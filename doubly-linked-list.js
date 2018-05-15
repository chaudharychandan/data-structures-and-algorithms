const ListEmpty = "ListEmpty";

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

const addLast = function(value) {
  const node = new Node(value);
  if (this.isEmpty()) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.length += 1;
};

const addFirst = function(value) {
  const node = new Node(value);
  if (this.isEmpty()) {
    this.head = node;
    this.tail = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
  this.length += 1;
};

const deleteLast = function() {
  if (this.isEmpty()) {
    throw ListEmpty;
  } else if (this.length === 1){
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  this.length -= 1;
};

const deleteFirst = function() {
  if (this.isEmpty()) {
    throw ListEmpty;
  } else if (this.length === 1){
    this.head = null;
    this.tail = null;
  } else {
    this.head.next.prev = null;
    this.head = this.head.next;
  }
  this.length -= 1;
};

const isEmpty = function() {
  return this.head === null && this.tail === null;
}

const getFirst = function() {
  if (this.isEmpty()) throw ListEmpty;
  return this.head.data;
}

const getLast = function() {
  if (this.isEmpty()) throw ListEmpty;
  return this.tail.data;
}

DoublyLinkedList.prototype.addLast = addLast;
DoublyLinkedList.prototype.addFirst = addFirst;
DoublyLinkedList.prototype.deleteLast = deleteLast;
DoublyLinkedList.prototype.deleteFirst = deleteFirst;
DoublyLinkedList.prototype.isEmpty = isEmpty;

module.exports = DoublyLinkedList;
