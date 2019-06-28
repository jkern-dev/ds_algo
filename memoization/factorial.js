// recursive
// O(n) runtime
function recFactorial(n) {
  if (n===1) return 1;
  return n * factorial(n - 1);
};


// memoized factorial
// O(n) runtime 
// if already placed in memo where it becomes constant time
let memo = {};
function memFactorial(n) {
  if (n in memo) return memo[n];
  if (n===1) return 1;

  let ans = n * memFactorial(n-1);
  memo[n] = ans;
  return ans;
}

console.log(memFactorial(6));
console.log(memo);