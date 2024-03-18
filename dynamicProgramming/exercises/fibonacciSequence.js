// O(2^n) solution with recursion
function fib(n) {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// O(n) solution using memoization with recursion
let memo = [];

function fib(n) {
  if (memo[n] !== undefined) return memo[n];
  if (n === 0 || n === 1) return n;

  memo[n] = fib(n - 1) + fib(n - 2);
  return memo[n];
}

// O(n) bottom up iterative solution
function fib(n) {
  fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;

  for (let index = 2; index <= n; index++) {
    fibArray[index] = fibArray[index - 1] + fibArray[index - 2];
  }

  return fibArray[n];
}
