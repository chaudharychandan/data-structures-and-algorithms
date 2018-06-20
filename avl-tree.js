const rotationTypes = {
  LL: 'LL',
  LR: 'LR',
  RL: 'RL',
  RR: 'RR'
}

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

  let tempNode = insertBST(node, item);
  let path = [];
  while(tempNode.parent !== null) {
    tempNode.parent.setHeight();

    setRotationType(path, tempNode);

    let balance = tempNode.parent.findBalance();
    if(balance > 1) {
      let type = getRotationType(path);
      if(type === rotationTypes.LL) {
        this.rotateLL(tempNode);
      } else if (type === rotationTypes.LR) {

      }
      break;
    } else if (balance < -1) {
      let type = getRotationType(path);
      if(type === rotationTypes.LR) {

      } else if (type === rotationTypes.RR) {

      }
      break;
    }
    tempNode = tempNode.parent;
  }
}

function getRotationType(path) {
  return path.reverse().join('');
}

function setRotationType(path, node) {
  if(node === node.parent.left) {
    path.push('L');
  } else {
    path.push('R');
  }
  if(path.length === 3) {
    path.shift();
  }
}

function rotateLL(node) {
  let parent = node.parent;
  parent.left = node.right;
  if (node.right) {
    node.right.parent = parent;
  }
  if (parent.parent) {
    node.parent = parent.parent;
    if (parent.parent.left === parent) {
      parent.parent.left = node;
    } else {
      parent.parent.right = node;
    }
  } else if (parent === this.root) {
    this.root = node;
  }
  node.right = parent;
  node.right.setHeight();
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
    return this.right.height;
  }
}

Node.prototype.setHeight = setHeight;
Node.prototype.findBalance = findBalance;
AVLTree.prototype.insert = insert;
AVLTree.prototype.rotateLL = rotateLL;

module.exports = AVLTree;
