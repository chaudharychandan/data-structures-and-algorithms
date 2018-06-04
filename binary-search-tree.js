class Tree {
  constructor() {
    this.root = null;
  }
}

class Node {
  constructor(data, parent = null, left = null, right = null) {
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

function insert (item) {
  let node = this.root;
  if (!node) {
    this.root = new Node(item);
    return;
  }

  while (true) {
    if (item <= node.data) {
      if(!node.left) {
        node.left = new Node(item, node);
        return;
      } else {
        node = node.left;
      }
    } else {
      if(!node.right) {
        node.right = new Node(item, node);
        return;
      } else {
        node = node.right;
      }
    }
  }
}

Tree.prototype.insert = insert;

module.exports = Tree;
