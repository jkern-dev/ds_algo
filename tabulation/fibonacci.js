// O(n) time and space complexity
function tabulatedFib(n) {
  // create empty array of n length
  let table = new Array(n);

  // seed the first two values
  table[0] = 0;
  table[1] = 1;

  // complete table by following fib pattern
  for (let i = 2; i<= n; i++) {
    table[i] = table[i-1] + table[i-2];
  }

  return table[n];
}

console.log(tabulatedFib(7)) // returns 13

// reduces to O(1) space since only required to store 2 variables during entire sequence
function optimalFib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let secondLast = 0;
  let last = 1;

  for (let i = 2; i <= n; i++) {
    let temp = last;
    last = last + secondLast;
    secondLast = temp;
  }
  return last;
}

console.log(optimalFib(7));