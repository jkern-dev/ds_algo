// Write a method fib(n) that takes in a number and returns the nth number of
// the fibonacci sequence.

function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(1)) // base case returns 1
console.log(fib(2)) // base case returns 1
console.log(fib(5)) // returns 5