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
    this.length = 1;
  }

  shift() {
    // If the list is empty (head is null), return null.
    // Store the current head node in a temporary variable temp.
    // Update the head pointer to the second node in the list (the next node of the current head).
    // Decrease the length attribute by one.
    // If the list becomes empty after the shift operation (i.e., the length attribute becomes 0), set the tail pointer to null.
    // Set the next attribute of the removed node (temp) to null.
    // Return the removed node.

    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }
}
