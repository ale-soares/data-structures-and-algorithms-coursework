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

  unshift(value) {
		// Create a new Node object newNode with the given value.
		// If the list is empty (head is null), set both the head and tail pointers of the list to the newNode.
		// If the list is not empty, set the next attribute of newNode to the current head node, then update the head pointer to point to newNode.
		// Increase the length attribute by one.
		
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}
