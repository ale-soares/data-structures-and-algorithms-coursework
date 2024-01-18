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

  reverse() {
		// Swap the head and tail pointers.
		// Iterate through the list, and for each node, set its next pointer to its previous node.
		// To correctly iterate through the list, you should keep a reference to the next node before changing the next pointer.
		// After you have iterated through all the nodes and reversed their next pointers, your reverse method is done.
		
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}
