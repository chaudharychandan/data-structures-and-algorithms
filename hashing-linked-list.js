const NotFound = "NotFound";
const ListFull = "ListFull";

class Node {
  constructor(key = null, name = null, description = null, next = null) {
    this.key = key;
    this.name = name;
    this.description = description;
    this.next = next;
  }
}

class Pointer {
  constructor(ptr) {
    this.ptr = ptr;
  }
}

class List {
  constructor(size) {
    const length = Math.floor(size/3);
    this.entries = new Array(length);
  }
}

List.prototype.add = function(key, name, description) {
  const node = new Node(key, name, description);
  let index = this.findHashIndex(key);
  let item = this.entries[index];
  if(!item) {
    this.entries[index] = new Pointer(node);
  } else {
    node.next = item.ptr;
    item.ptr = node;
  }
}

List.prototype.find = function(key) {
  let index = this.findHashIndex(key);
  let item = this.entries[index];
  if(!item) {
    return NotFound
  } else {
    let node = item.ptr;
    while(node.next !== null && node.key !== key) {
      node = node.next;
    }
    if(node.key === key) {
      return node;
    } else {
      return NotFound;
    }
  }
}

List.prototype.delete = function(key) {
  let index = this.findHashIndex(key);
  let item = this.entries[index];
  if (!item) {
    return NotFound;
  } else {
    let prevNode = item.ptr;
    let node = prevNode && prevNode.next;
    if (prevNode && prevNode.key === key) {
      if(node) {
        item.ptr = node;
      } else {
        this.entries[index] = null;
      }
    }
    while (node !== null) {
      if(node.key === key) {
        prevNode.next = node.next;
        return;
      }
      prevNode = node;
      node = node.next;
    }
    return NotFound;
  }
}

List.prototype.findHashIndex = function(key) {
  return key % this.entries.length;
}

module.exports = List;
