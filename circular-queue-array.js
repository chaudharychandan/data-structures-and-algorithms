const QueueFullException = "QueueFullException";
const QueueEmptyException = "QueueEmptyException";

class Queue {
  constructor(size) {
    this.front = 0;
    this.rear = 0;
    this.data = new Array(size);
  }
}

Queue.prototype.enqueue = function(item) {
  if (this.isFull()) throw QueueFullException;
  this.data[this.rear] = item;
  this.rear = (this.rear + 1) % this.data.length;
};

Queue.prototype.dequeue = function() {
  if (this.isEmpty()) throw QueueEmptyException;
  delete this.data[this.front];
  this.front = (this.front + 1) % this.data.length;
};

Queue.prototype.isEmpty = function() {
  return this.front === this.rear;
};

Queue.prototype.isFull = function() {
  return (this.rear + 1) % this.data.length === this.front;
}

Queue.prototype.front = function() {
  if (this.isEmpty()) throw QueueEmptyException;
  return this.data[this.front];
}

module.exports = Queue;
