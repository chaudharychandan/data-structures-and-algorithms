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

function predeccesorOf (item) {
  let node = this.search(item);
  if (node instanceof Node) {
    if(node.left) {
      node = node.left;
      return this.maximum(node);
    } else {
      let parent = node.parent;
      while (true) {
        if(parent) {
          if(parent.right === node) {
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

function maximum (root) {
  let node = root || this.root;
  while(true) {
    if (node) {
      let right = node.right;
      if(right) {
        node = right;
      } else {
        return node.data;
      }
    } else {
      break;
    }
  }
  return NotFound;
}

function remove (item) {
  let node = this.search(item);
  if (node instanceof Node) {
    if (!node.left && !node.right) {
      let parent = node.parent;
      if (parent.left === node) {
        parent.left = null;
      } else if (parent.right === node) {
        parent.right = null;
      }
      node.parent = null;
    } else if (node.left && !node.right) {
      let parent = node.parent;
      if(parent.left === node) {
        parent.left = node.left;
      } else if (parent.right === node) {
        parent.right = node.left;
      }
      node.left.parent = parent;
      node.parent = null;
    } else if (!node.left && node.right) {
      let parent = node.parent;
      if(parent.left === node) {
        parent.left = node.right;
      } else if (parent.right === node) {
        parent.right = node.right;
      }
      node.right.parent = parent;
      node.parent = null;
    } else if (node.left && node.right) {
      let predeccesorItem = this.predeccesorOf(item);
      this.delete(predeccesorItem);
      node.data = predeccesorItem;
    }
    return true;
  }
  return NotFound;
}

function traverseInorder() {
  const list = [];
  inorder(this.root, list);
  return list;
}

function traversePreorder() {
  const list = [];
  preorder(this.root, list);
  return list;
}

function traversePostorder() {
  const list = [];
  postorder(this.root, list);
  return list;
}

function inorder (root, list) {
  if (root.left) { inorder(root.left, list); }
  list.push(root.data);
  if (root.right) { inorder(root.right, list); }
}

function preorder (root, list) {
  list.push(root.data);
  if (root.left) { inorder(root.left, list); }
  if (root.right) { inorder(root.right, list); }
}

function postorder (root, list) {
  if (root.left) { inorder(root.left, list); }
  if (root.right) { inorder(root.right, list); }
  list.push(root.data);
}

Tree.prototype.insert = insert;
Tree.prototype.search = search;
Tree.prototype.successorOf = successorOf;
Tree.prototype.predeccesorOf = predeccesorOf;
Tree.prototype.minimum = minimum;
Tree.prototype.maximum = maximum;
Tree.prototype.delete = remove;
Tree.prototype.traverseInorder = traverseInorder;
Tree.prototype.traversePreorder = traversePreorder;
Tree.prototype.traversePostorder = traversePostorder;

module.exports = Tree;
