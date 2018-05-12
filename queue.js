const QueueEmpty = "QueueEmpty";

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

Queue.prototype.enqueue = function(value) {
  const node = new Node(value);
  if(this.length === 0) {
    this.start = node;
    this.end = node;
  } else {
    this.end.next = node;
    this.end = node;
  }
  this.length += 1;
}

Queue.prototype.dequeue = function() {
  if (this.length === 0) throw QueueEmpty;

  this.start = this.start.next;
  this.length -= 1;
}

Queue.prototype.peek = function() {
  if (this.length === 0) throw QueueEmpty;
  return this.start.data;
}

module.exports = Queue;
