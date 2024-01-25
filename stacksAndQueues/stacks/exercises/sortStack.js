// Stack: Sort Stack ( ** Interview Question)
// Implement a function called sortStack() that takes a stack of integers as input and sorts the stack in ascending order (with the smallest element on top) using an additional temporary stack.

// Input:
// A Stack object stack containing integer values.

// Output:
// The function should modify the original input stack, sorting its elements in ascending order.

// Constraints:
// You must use the provided Stack class to store and manipulate the elements.
// You cannot use any other data structures or built-in sorting methods for this task.

class Stack {
  constructor() {
    this.stackList = [];
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }
}

function sortStack(stack) {
  const additionalStack = new Stack();

  while (!stack.isEmpty()) {
    const temp = stack.pop();

    while (!additionalStack.isEmpty() && additionalStack.peek() > temp) {
      stack.push(additionalStack.pop());
    }

    additionalStack.push(temp);
  }

  while (!additionalStack.isEmpty()) {
    stack.push(additionalStack.pop());
  }
}
