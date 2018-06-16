module.exports = (list) => {
  const countArray = list.reduce((map, item) => {
    map[item] = map[item] ? map[item] + 1 : 1;
    return map;
  }, []);
  const len = countArray.length;
  if (!countArray[0]) {
    countArray[0] = 0;
  }
  for (let i = 1; i < len; i++) {
    countArray[i] = (countArray[i] || 0) + countArray[i-1];
  }
  const listLength = list.length - 1;
  let result = [];
  for (let i = listLength; i >= 0; i--) {
    const item = list[i];
    countArray[item] = countArray[item] - 1;
    const count = countArray[item];
    result[count] = item;
  }
  return result;
};
