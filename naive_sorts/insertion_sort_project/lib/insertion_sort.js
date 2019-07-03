function insertionSort(arr) {
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    let currEle = arr[i];
    for (var j = i - 1; j >= 0 && currEle < arr[j]; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currEle;
    console.log(arr);
  }
  
  return arr;
}

module.exports = {
    insertionSort
};