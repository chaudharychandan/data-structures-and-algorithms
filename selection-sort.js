module.exports = (list) => {
  const listLength = list.length;
  for (let i = 0; i < listLength - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < listLength; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    [ list[i], list[minIndex] ] = [ list[minIndex], list[i] ];
  }
  return list;
};
