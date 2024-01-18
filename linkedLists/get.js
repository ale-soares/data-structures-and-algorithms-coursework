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

  get(index) {
    // If the index is less than 0 or greater than or equal to the length attribute of the list, return undefined.
    // Initialize a temporary variable temp to the head node.
    // Loop through the list index number of times, each time moving the temp variable to the next node.
    // Return the node at which temp is pointing after the loop ends.

    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
}
