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

  push(value) {
    // Create a new Node object newNode with the given value.
    // If the list is empty (head is null), set both the head and tail pointers of the list to the newNode.
    // If the list is not empty, set the next attribute of the current tail node to point to the newNode, then update the tail pointer to point to newNode.
    // Increase the length attribute by one.
    // Return the list

    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
