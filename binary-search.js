module.exports = (list, item) => {
  return binarySearch(list, item, 0, list.length - 1);
}

const binarySearch = (list, item, low, high) => {
  if (low > high) {
    return false;
  }

  const mid = Math.floor((low + high) / 2);
  let midItem = list[mid];

  if (item === midItem) {
    return true;
  } else if (item < midItem) {
    return binarySearch(list, item, low, mid - 1);
  } else {
    return binarySearch(list, item, mid + 1, high);
  }
};
