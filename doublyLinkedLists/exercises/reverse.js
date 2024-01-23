// DLL: Reverse ( ** Interview Question)
// Implement a member function called reverse() that reverses the nodes of a doubly linked list.

// Output:
// The function should modify the doubly linked list in-place, reversing the order of the nodes.

// Constraints:
// You can only reverse the nodes themselves, not just their values.

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

  reverse() {
    let cur = this.head;
    let temp = null;

    while (cur !== null) {
      temp = cur.prev;
      cur.prev = cur.next;
      cur.next = temp;
      cur = cur.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
}
