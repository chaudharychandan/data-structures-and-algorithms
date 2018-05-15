module.exports = (list) => {
  const listLength = list.length;
  for (let i = 1; i < listLength; i++) {
    let j = i - 1;
    while (list[j] > list[i] && j > -1) {
      j = j - 1;
    }
    if(j !== i-1) {
      const item = list.splice(i, 1)[0];
      if(j === -1) {
        list.unshift(item)
      } else {
      	list.splice(j+1, 0, item);
      }
    }
  }
  return list;
};
