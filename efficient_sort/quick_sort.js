let arr = [7,3,8,9,2];

// both partitions are O(n), forEach and filter both have linear time complexity

// function partition(array, pivot) {
//   let left = [];
//   let right = [];
//   array.forEach(el => {
//     if (el < pivot) {
//       left.push(el);
//     } else {
//       right.push(el);
//     }
//   });

//   return [left, right];
// }

// fancy partition
// function partition(array, pivot) {
//   let left = array.filter(el => el < pivot);
//   let right = array.filter(el => el >= pivot);
//   return [left, right];
// }

// Time complexity
// average case O(n * logN), worst case O(n^2)
function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];
}

console.log(quickSort(arr));