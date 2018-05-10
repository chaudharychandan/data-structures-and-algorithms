module.exports = (list) => {
  const listLength = list.length;
  let swapped, noOfSortedItems = 0;
  do {
    swapped = false;
    for (let i = 0; i < listLength - noOfSortedItems - 1; i++) {
      if (list[i] > list[i+1]) {
        [ list[i], list[i+1] ] = [ list[i+1], list[i] ];
        swapped = true;
      }
    }
    noOfSortedItems += 1;
  } while (swapped === true);
  return list;
}
