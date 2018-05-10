const mergeSort = (list) => {
  const listLength = list.length;
  if (listLength < 2) return list;
  let mid = Math.floor(listLength / 2);
  let left = list.slice(0, mid);
  let right = list.slice(mid, listLength);
  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

const merge = (left, right) => {
  let result = [];
  let leftLength = left.length, rightLength = right.length;

  let i = 0, j = 0, index = 0;

  while (i < leftLength && j < rightLength) {
    if (left[i] < right[j]) {
      result[index++] = left[i++];
    } else {
      result[index++] = right[j++];
    }
  }

  if (i < leftLength) {
    result = result.concat(left.slice(i, leftLength));
  } else if(j < rightLength) {
    result = result.concat(right.slice(j, rightLength));
  }

  return result;
}


module.exports = mergeSort;
