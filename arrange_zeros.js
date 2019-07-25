function arrangeZeros(arr) {
  let res = [];
  let zeroCount = 0;
  if (arr.length === 0) return arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      res.push(arr[i]);
    }
  }
  if (zeroCount === 0) return arr;
  for (let j = 1; j <= zeroCount; j++) {
    res.push(0);
  }

  return res;
}

// function arrangeZeros(arr) {
//   let arrLength = arr.length;
//   let i = 0;
//   while (arrLength > 0) {
//     if (arr[i] === 0) {
//       arr.push(...arr.slice(i, 1));
//       arrLength--;
//       i++;
//     } else {
//       arrLength--;
//       i++;
//     }
//   }
//   return arr;
// }

console.log(arrangeZeros([]));
console.log(arrangeZeros([1,2,3]));
console.log(arrangeZeros([1,0,2,0,3]));
