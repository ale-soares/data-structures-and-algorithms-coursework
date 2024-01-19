// LL: Remove Duplicates ( ** Interview Question)
// Implement a member function called removeDuplicates() that removes all duplicate nodes from the linked list based on their values.
// Note: this linked list class does NOT have a tail which will make this method easier to implement.

// Output:
// The function should modify the linked list in-place, removing all nodes with duplicate values.

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
    this.length = 1;
  }

  removeDuplicates() {
    const values = new Set();
    let cur = this.head;
    let prev = null;

    while (cur !== null) {
      if (values.has(cur.value)) {
        prev.next = cur.next;
        this.length--;
      } else {
        values.add(cur.value);
        prev = cur;
      }
      cur = cur.next;
    }
  }
}
