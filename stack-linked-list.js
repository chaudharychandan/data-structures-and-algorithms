const StackIsEmpty = "StackIsEmpty";

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}


Stack.prototype.push = function(item) {
  const node = new Node(item, this.top);
  this.top = node;
  this.length += 1;
}

Stack.prototype.pop = function() {
  if (this.length === 0) throw StackIsEmpty;

  let ptr = this.top;
  const item = ptr.data;

  this.top = ptr.next;
  this.length -= 1;

  return item;
}

Stack.prototype.peek = function() {
  if (this.length === 0) throw StackIsEmpty;
  return this.top.data;
}

Stack.prototype.isEmpty = function() {
  this.top = null;
  this.length = 0;
}

Stack.prototype.search = function(value) {
  let ptr = this.top;
  let distance = 0;

  while(ptr !== null) {
    if(ptr.data === value) {
      return distance;
    }
    distance += 1;
    ptr = ptr.next;
  }
  return -1;
}

Stack.prototype.size = function() {
  return this.length;
}

module.exports = Stack;
