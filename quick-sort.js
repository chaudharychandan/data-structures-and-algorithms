module.exports = (list) => {
  quickSort(list, 0, list.length - 1);
};

const quickSort = (list, low, high) => {
  if (low < high) {
    let pivotPosition = partition(list, low, high);
    quickSort(list, low, pivotPosition - 1);
    quickSort(list, pivotPosition + 1, high);
  }
};

const partition = (list, low, high) => {
  let pivot = list[high], i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if(list[j] <= pivot) {
      i = i + 1;
      [list[i], list[j]] = [list[j], list[i]];
    }
  }
  [list[i+1], list[high]] = [list[high], list[i+1]];
  return i + 1;
};
