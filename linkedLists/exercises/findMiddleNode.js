// LL: Find Middle Node ( ** Interview Question)
// Implement a member function called findMiddleNode() that finds and returns the middle node of the linked list.
// Note: this LinkedList implementation does not have a length member variable.

// Output:
// Return the middle node of the linked list.
// If the list has an even number of nodes, return the second middle node (the one closer to the end).

// Constraints:
// You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
// You can only traverse the linked list once.

// Example 1:
// Suppose you have a LinkedList object, list, with the following values:
// 1 -> 2 -> 3 -> 4 -> 5
// After calling the findMiddleNode() function
// The middle node should have the value 3.

// Example 2:
// Now suppose you have a LinkedList object, list, with the following values:
// 1 -> 2 -> 3 -> 4 -> 5 -> 6
// After calling the findMiddleNode() function
// The middle node should have the value 4.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
  }

  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }
}
