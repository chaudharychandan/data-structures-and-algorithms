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
  let node = this.root;
  if (!node) {
    this.root = new Node(item);
    return;
  }

  let tempNode = this.insertBST(item);
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
        this.rotateRR(tempNode);
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

function rotateRR(node) {
  let parent = node.parent;
  parent.right = node.left;
  if (node.left) {
    node.left.parent = parent;
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
  node.left = parent;
  node.left.setHeight();
  node.setHeight();
}

function rotateLR(node) {

}

function rotateRL(node) {

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
AVLTree.prototype.rotateLL = rotateLL;
AVLTree.prototype.rotateLR = rotateLR;
AVLTree.prototype.rotateRL = rotateRL;
AVLTree.prototype.rotateRR = rotateRR;

module.exports = AVLTree;
