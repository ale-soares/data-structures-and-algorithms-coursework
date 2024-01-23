// DLL: Swap First and Last ( ** Interview Question)
// Implement a member function called swapFirstLast() that swaps the values of the first and last nodes of a doubly linked list.

// Output:
// The function should modify the doubly linked list in-place, swapping the values of the first and last nodes.

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

  swapFirstLast() {
    if (this.length < 2) return;
    let temp = this.head.value;
    this.head.value = this.tail.value;
    this.tail.value = temp;
  }
}