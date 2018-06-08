const TreeEmpty = 'TreeEmpty';
const NotFound = 'NotFound';

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

function search (item) {
  let node = this.root;
  while(node) {
    if (item === node.data) {
      return node;
    } else if(item < node.data) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return NotFound;
}

function successorOf (item) {
  let node = this.search(item);
  if (node instanceof Node) {
    if(node.right) {
      node = node.right;
      return this.minimum(node);
    } else {
      let parent = node.parent;
      while (true) {
        if(parent) {
          if(parent.left === node) {
            return parent.data;
          } else {
            if (parent.parent) {
              node = parent;
              parent = parent.parent;
            } else {
              return parent.data;
            }
          }
        } else {
          break;
        }
      }
    }
  }
  return NotFound;
}

function minimum (root) {
  let node = root || this.root;
  while(true) {
    if (node) {
      let left = node.left;
      if(left) {
        node = left;
      } else {
        return node.data;
      }
    } else {
      break;
    }
  }
  return NotFound;
}

Tree.prototype.insert = insert;
Tree.prototype.search = search;
Tree.prototype.successorOf = successorOf;
Tree.prototype.minimum = minimum;

module.exports = Tree;
