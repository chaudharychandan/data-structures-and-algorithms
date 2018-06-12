class Heap {
  constructor() {
    this.nodes = [];
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

function insert(key, value) {
  const node = new Node(key, value);
  const nodes = this.nodes;
  nodes.push(node);
  this.moveUp(nodes.length - 1);
}

function remove() {
  const nodes = this.nodes;
  const count = nodes.length;
  const rootNode = nodes[0];

  if(count === 0) {
    return;
  } else if(count === 1) {
    this.clear();
  } else {
    nodes[0] = nodes.pop();
    this.moveDown(0);
  }
  return rootNode.value;
}

function moveUp(index) {
  const nodes = this.nodes;
  const node = nodes[index];

  while(index > 0) {
    const parentIndex = this.getParentIndex(index);
    if (nodes[parentIndex].key > node.key) {
      nodes[index] = nodes[parentIndex];
      index = parentIndex;
    } else {
      break;
    }
  }
  nodes[index] = node;
}

function moveDown(index) {
  const nodes = this.nodes;
  const count = nodes.length;

  const node = nodes[index];

  while(index < (count >> 1)) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    const smallerChildIndex = rightChildIndex < count && nodes[rightChildIndex].key < nodes[leftChildIndex].key ? rightChildIndex : leftChildIndex;
    if (nodes[smallerChildIndex].key > node.key) {
      break;
    }

    nodes[index] = nodes[smallerChildIndex];
    index = smallerChildIndex;
  }
  nodes[index] = node;
}

function peek() {
  const nodes = this.nodes;
  if(nodes.length === 0) {
    return;
  }

  return nodes[0].value;
}

function clear() {
  this.nodes = [];
}

function getLeftChildIndex(index) {
  return index * 2 + 1;
}

function getRightChildIndex(index) {
  return index * 2 + 2;
}

function getParentIndex(index) {
  return (index - 1) >> 1;
}

Heap.prototype.insert = insert;
Heap.prototype.remove = remove;
Heap.prototype.getParentIndex = getParentIndex;
Heap.prototype.getLeftChildIndex = getLeftChildIndex;
Heap.prototype.getRightChildIndex = getRightChildIndex;
Heap.prototype.moveUp = moveUp;
Heap.prototype.moveDown = moveDown;
Heap.prototype.peek = peek;
Heap.prototype.clear = clear;

module.exports = Heap;
