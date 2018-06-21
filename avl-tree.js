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

function insertBST(item) {
  let node = this.root;
  if (!node) {
    this.root = new Node(item);
    return this.root;
  }
  let newNode;
  while (true) {
    if (item <= node.data) {
      if(!node.left) {
        newNode = new Node(item, node);
        node.left = newNode;
        node.setHeight();
        break;
      } else {
        node = node.left;
      }
    } else {
      if(!node.right) {
        newNode = new Node(item, node);
        node.right = newNode;
        node.setHeight();
        break;
      } else {
        node = node.right;
      }
    }
  }
  return newNode;
}

function insert (item) {
  let tempNode = this.insertBST(item);
  while(tempNode.parent !== null) {
    tempNode.parent.setHeight();
    let balance = tempNode.parent.findBalance();

    if(balance > 1) {
      if(item <= tempNode.data) {
        //LL child
        this.rotateRight(tempNode);
      } else {
        //LR child
        const right = tempNode.right;
        this.rotateLeft(right);
        this.rotateRight(right);
      }
      break;
    } else if (balance < -1) {
      if (item > tempNode.data) {
        //RR child
        this.rotateLeft(tempNode);
      } else {
        //RL child
        const left = tempNode.left;
        this.rotateRight(left);
        this.rotateLeft(left);
      }
      break;
    }
    tempNode = tempNode.parent;
  }
}

function rotateRight(node) {
  let parent = node.parent;
  parent.left = node.right;
  if (node.right) {
    node.right.parent = parent;
  }
  node.parent = parent.parent;
  if (parent.parent) {
    if (parent.parent.left === parent) {
      parent.parent.left = node;
    } else {
      parent.parent.right = node;
    }
  } else if (parent === this.root) {
    this.root = node;
  }
  parent.parent = node;
  node.right = parent;
  node.right.setHeight();
  node.setHeight();
}

function rotateLeft(node) {
  let parent = node.parent;
  parent.right = node.left;
  if (node.left) {
    node.left.parent = parent;
  }
  node.parent = parent.parent;
  if (parent.parent) {
    if (parent.parent.left === parent) {
      parent.parent.left = node;
    } else {
      parent.parent.right = node;
    }
  } else if (parent === this.root) {
    this.root = node;
  }
  parent.parent = node;
  node.left = parent;
  node.left.setHeight();
  node.setHeight();
}

function setHeight() {
  this.height = 1 + Math.max((this.left || 0) && this.left.height, (this.right || 0) && this.right.height);
}

function findBalance() {
  if (this.left && this.right) {
    return this.left.height - this.right.height;
  } else if (this.left) {
    return this.left.height;
  } else if (this.right) {
    return -this.right.height;
  }
}

Node.prototype.setHeight = setHeight;
Node.prototype.findBalance = findBalance;
AVLTree.prototype.insertBST = insertBST;
AVLTree.prototype.insert = insert;
AVLTree.prototype.rotateLeft = rotateLeft;
AVLTree.prototype.rotateRight = rotateRight;

module.exports = AVLTree;
