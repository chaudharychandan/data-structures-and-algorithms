const NotFound = "NotFound";
const ListFull = "ListFull";

class Node {
  constructor(key = null, name = null, description = null) {
    this.key = key;
    this.name = name;
    this.description = description;
  }
}

class List {
  constructor(size) {
    this.entries = new Array(size);
  }
}

List.prototype.add = function(key, name, description) {
  const node = new Node(key, name, description);
  let index = this.findHashIndex(key);
  let position = index;
  while(!this.isPositionFree(index)) {
    index = (index + 1) % this.entries.length;
    if(position === index) {
      throw ListFull;
      break;
    }
  }
  this.entries[index] = node;
}

List.prototype.delete = function(key) {
  const index = this.findNodeIndex(key);
  if(index === undefined) return NotFound;
  let item = this.entries[index];
  if(item) {
    this.placeTombstone(index);
  } else {
    return NotFound;
  }
}

List.prototype.find = function(key) {
  const index = this.findNodeIndex(key);
  if(index === undefined) return NotFound;
  let item = this.entries[index];
  return item ? item : NotFound;
}

List.prototype.findNodeIndex = function(key) {
  let index = this.findHashIndex(key);
  let position = index;
  while(!this.isPositionEmpty(index) && this.entries[index].key !== key) {
    index = (index + 1) % this.entries.length;
    if(position === index) {
      return;
      break;
    }
  }
  return index;
}

List.prototype.findHashIndex = function(key) {
  return key % this.entries.length;
}

List.prototype.isPositionEmpty = function(index) {
  return this.entries[index] === undefined;
}

List.prototype.isPositionFree = function(index) {
  const item = this.entries[index];
  return item === undefined || item.key === null;
}

List.prototype.placeTombstone = function(index) {
  this.entries[index] = new Node();
}

module.exports = List;
