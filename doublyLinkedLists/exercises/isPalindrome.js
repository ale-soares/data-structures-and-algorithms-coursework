// DLL: Palindrome Checker ( ** Interview Question)
// Implement a member function called isPalindrome() that checks if a doubly linked list is a palindrome.

// A doubly linked list is a palindrome if the sequence of values read from the head to the tail is the same as the sequence of values read from the tail to the head.

// Output:
// Return a boolean value: true if the doubly linked list is a palindrome, and false otherwise.

// Constraints:
// You can only traverse the doubly linked list once.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  isPalindrome() {
    if (this.length <= 1) return true;

    let forward = this.head;
    let backward = this.tail;

    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      if (forward.value !== backward.value) return false;
      forward = forward.next;
      backward = backward.prev;
    }

    return true;
  }
}
