// LL: Has Loop ( ** Interview Question)
// Write a method called hasLoop that is part of the linked list class.
// The method should be able to detect if there is a cycle or loop present in the linked list.
// The method should utilize Floyd's cycle-finding algorithm, also known as the "tortoise and hare" algorithm, to determine the presence of a loop efficiently.

// Output:
// Return true if the linked list has a loop.
// Return false if the linked list does not have a loop.

// Constraints:
// You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
// You can only traverse the linked list once.

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
    this.tail = newNode;
    this.length = 1;
  }

  hasLoop() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }

    return false;
  }
}
