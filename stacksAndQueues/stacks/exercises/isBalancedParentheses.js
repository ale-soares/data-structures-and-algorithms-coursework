// Stack: Parentheses Balanced ( ** Interview Question)
// Implement a function called isBalancedParentheses() that checks if a given string containing parentheses is balanced or not.

// Input:
// A string parentheses.

// Output:
// The function should return a boolean value, true if the input string contains balanced parentheses, and false if not.

// Constraints:
// You must use the provided Stack class to check if the parentheses are balanced.
// You cannot use built-in string manipulation methods for this task.

class Stack {
  constructor() {
    this.stackList = [];
  }

  isEmpty() {
    return this.stackList.length === 0;
  }
  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }
}

function isBalancedParentheses(parentheses) {
  const stack = new Stack();
  for (const p of parentheses) {
    if (p === "(") {
      stack.push(p);
    } else if (p === ")") {
      if (stack.isEmpty() || stack.pop() !== "(") {
        return false;
      }
    }
  }
  return stack.isEmpty();
}
