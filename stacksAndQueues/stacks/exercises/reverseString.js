// Stack: Reverse String ( ** Interview Question)
// Implement a function called reverseString() that takes a string as input and returns a new string with its characters reversed, using the Stack class provided.

// Output:
// The method should return a new string with the characters of the input string reversed.

// Constraints:
// You must use the provided Stack class to reverse the string.
// You cannot use built-in string manipulation methods for reversing the string.

class Stack {
  constructor() {
    this.stackList = [];
  }
}

function reverseString(string) {
  const stack = new Stack();
  let reversedString = "";

  for (const c of string) {
    stack.push(c);
  }

  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}
