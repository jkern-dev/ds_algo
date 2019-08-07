function imageRecognition(arr) {
  let cache = arr;
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === 0 || j === 0) {
        continue;
      } else if (arr[i][j] > 0) {
        cache[i][j] = 1 + Math.min(cache[i][j-1], cache[i-1][j], cache[i-1][j-1]);
      }
      if (cache[i][j] > result) result = cache[i][j]
    }
  }

  return result;
}

let arr = [
  [1,1,0,1,0],
  [0,1,1,1,0],
  [1,1,1,1,0],
  [0,1,1,1,1]
];

console.log(imageRecognition(arr));