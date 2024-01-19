// LL: Find Kth Node From End ( ** Interview Question)
// Implement a member function called findKthFromEnd(k) that finds and returns the kth node from the end of the linked list.
// Note: this LinkedList implementation does not have a length member variable.

// Output:
// Return the kth node from the end of the linked list.
// If the value of k is greater than or equal to the number of nodes in the list, return null.

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
    this.tail = this.head;
  }

  findKthFromEnd(k) {
    // Initialize slow and fast pointers at head
    let slow = this.head;
    let fast = this.head;

    // Move fast pointer k steps ahead
    for (let i = 0; i < k; ++i) {
      // If fast reaches null, k is out of range
      if (fast === null) {
        return null;
      }
      fast = fast.next;
    }

    // Iterate until fast reaches the end
    while (fast !== null) {
      // Move slow and fast pointers one step
      slow = slow.next;
      fast = fast.next;
    }

    // When fast reaches end, slow is at kth from end
    return slow;
  }
}
