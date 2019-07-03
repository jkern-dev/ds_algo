// time complexit O(log(n))
// space complexity O(n)
// input array must be sorted for binary search to be used
function binarySearch(arr, target) {
  if (arr.length === 0) return false;

  let midIdx = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0,midIdx);
  let rightHalf = arr.slice(midIdx + 1);

  if (target < arr[midIdx]) {
    return binarySearch(leftHalf, target);
  } else if (target > arr[midIdx]) {
    return binarySearch(rightHalf,target)
  } else {
    return true;
  }
}


console.log(binarySearch([5, 10, 12, 15, 20, 30, 70], 12));
console.log(binarySearch([5, 10, 12, 15, 20, 30, 70], 24));