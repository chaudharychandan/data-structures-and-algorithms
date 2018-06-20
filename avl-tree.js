class AVLTree {
  constructor() {
    this.root = null;
  }
}

class Node {
  constructor(data, parent = null, left = null, right = null, height = 1) {
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.data = data;
    this.height = height;
  }
}

function insertBST(node, item) {
  let newNode;
  while (true) {
    if (item <= node.data) {
      if(!node.left) {
        newNode = new Node(item, node);
        node.left = newNode;
        node.setHeight();
        break;
      } else {
        node.setHeight();
        node = node.left;
      }
    } else {
      if(!node.right) {
        newNode = new Node(item, node);
        node.right = newNode;
        node.setHeight();
        break;
      } else {
        node.setHeight();
        node = node.right;
      }
    }
  }
  return newNode;
}

function insert (item) {
  let node = this.root;
  if (!node) {
    this.root = new Node(item);
    return;
  }

  insertBST(node, item);
}

function setHeight() {
  this.height = 1 + Math.max((this.left || 0) && this.left.height, (this.right || 0) && this.right.height);
}

Node.prototype.setHeight = setHeight;
AVLTree.prototype.insert = insert;

module.exports = AVLTree;
