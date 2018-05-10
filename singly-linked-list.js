const ListEmpty = "ListEmpty";
const IndexOutOfBoundsException = "IndexOutOfBoundsException";

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const getFirst = function() {
  const first = this.head;
  if(first === null) throw LIST_EMPTY;

  return first.data;
};

const getLast = function() {
  let ptr = this.head;
  if(ptr === null) throw LIST_EMPTY;

  while(ptr.next !== null) {
    ptr = ptr.next;
  }

  return ptr.data;
};

const addFirst = function(value) {
  const node = new Node(value, this.head);
  this.length += 1;
  this.head = node;
};

const removeFirst = function() {
  const first = this.head;
  
  if(first === null) throw LIST_EMPTY;
  this.head = this.head.next;
  this.length -= 1;

  return first.data;
};

const removeLast = function() {
  let prevPtr = this.head;
  let ptr = this.head.next;

  if(prevPtr === null) throw LIST_EMPTY;
  if(ptr === null)  {
    this.head = null;
    this.length -= 1;
    return prevPtr.data;
  }

  while (ptr !== null && ptr.next !== null) {
    prevPtr = ptr;
    ptr = ptr.next;
  }
  prevPtr.next = null;
  this.length -= 1;

  return ptr.data;
};

const contains = function(value) {
  let ptr = this.head;

  if(ptr === null) throw LIST_EMPTY;
  while(ptr !== null) {
    if(ptr.data === value) {
      return true;
    }
    ptr = ptr.next;
  }
  return false;
};

const size = function() {
  let ptr = this.head;
  let count = 0;

  while(ptr !== null) {
    ptr = ptr.next;
    count++;
  }
  return count;
};

const add = function(value) {
  const node = new Node(value);
  this.length += 1;
  if (this.head === null) {
    this.head = node;
  } else {
    let ptr = this.head;
    while (ptr.next !== null) {
      ptr = ptr.next;
    }
    ptr.next = node;
  }
};

const remove = function(value) {
  let prevPtr = this.head;
  let ptr = this.head.next;

  if(prevPtr === null) throw LIST_EMPTY;
  if(prevPtr.data === value)  {
    this.head = ptr;
    this.length -= 1;
    return true;
  }

  while (ptr !== null) {
    if(ptr.data === value) {
      prevPtr.next = ptr.next;
      this.length -= 1;
      return true;
    }
    prevPtr = ptr;
    ptr = ptr.next;
  }
  return false;
};

const clear = function() {
  this.head = null;
  this.length = 0;
};

SinglyLinkedList.prototype.getFirst = getFirst;
SinglyLinkedList.prototype.getLast = getLast;
SinglyLinkedList.prototype.removeFirst = removeFirst;
SinglyLinkedList.prototype.removeLast = removeLast;
SinglyLinkedList.prototype.addFirst = addFirst;
SinglyLinkedList.prototype.addLast = add;
SinglyLinkedList.prototype.contains = contains;
SinglyLinkedList.prototype.size = size;
SinglyLinkedList.prototype.add = add;
SinglyLinkedList.prototype.remove = remove;
SinglyLinkedList.prototype.clear = clear;

module.exports = SinglyLinkedList;
