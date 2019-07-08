// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
  if (array[idx] === undefined) return true;
  let leftChild = idx * 2;
  let rightChild = idx * 2 + 1;
  let leftVal = array[leftChild] === undefined ? -Infinity : array[leftChild];
  let rightVal = array[rightChild] === undefined ? -Infinity : array[rightChild];

  return array[leftChild] < array[idx] 
        && array[rightChild] < array[idx] 
        && isMaxHeap(array, leftChild) 
        && isMaxHeap(array, rightChild);

}


module.exports = {
    isMaxHeap
};