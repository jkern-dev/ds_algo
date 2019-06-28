function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// memoized with sub regions of fib sequence saved 
// if no memo passed it is defaulted to empty object
function memFib(n, memo={}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;
  // if not in memo then save it with recursive call
  memo[n] = memFib(n - 1, memo) + memFib(n - 2, memo);
  return memo[n];
}

console.log(memFib(50));