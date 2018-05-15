const StackFullException = "StackFullException";
const StackEmptyException = "StackEmptyException";

class Stack {
  constructor(size) {
    this.top = -1;
    this.data = new Array(size);
  }
}

Stack.prototype.push = function(item) {
  if (this.isFull()) throw StackEmptyException;
  this.top += 1;
  this.data[this.top] = item;
}

Stack.prototype.pop = function() {
  if (this.isEmpty()) throw StackEmptyException;
  delete this.data[this.top];
  this.top -= 1;
}

Stack.prototype.isFull = function() {
  return this.data.length === this.top - 1;
}

Stack.prototype.isEmpty = function() {
  return this.top === -1;
}

Stack.prototype.peek = function() {
  if(this.isEmpty()) throw StackEmptyException;
  return this.data[top];
}

module.exports = Stack;
