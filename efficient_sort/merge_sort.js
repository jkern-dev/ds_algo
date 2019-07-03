// merge is O(n) time complexity and mergeSort is O(logN)
// therefore combined O(n * logN) time complexity
// O(n) space complexity

// merging sort method
function merge(arr1, arr2) {
  let merged = [];
  while (arr1.length || arr2.length) {
    let ele1 = arr1.length ? arr1[0] : Infinity;
    let ele2 = arr2.length ? arr2[0] : Infinity;
    let next;
    if (ele1 < ele2) {
      next = arr1.shift();
    } else {
      next = arr2.shift();
    }
    merged.push(next);
  }

  return merged;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let minIdx = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0,minIdx);
  let rightHalf = arr.slice(minIdx);

  let sortedLeft = mergeSort(leftHalf);
  let rightHalf = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}