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

  pop() {
		// If the list is empty (i.e., the length attribute is 0), return undefined.
		// Traverse the list to find the second last node. Use two pointers temp and pre to keep track of the current node and the previous node while traversing.
		// Set the tail attribute of the list to the second last node (i.e., the pre pointer).
		// Set the next attribute of the new tail node to null, effectively removing the last node from the list.
		// Decrease the length attribute by one.
		// If the list becomes empty after the pop operation (i.e., the length attribute becomes 0), set both head and tail pointers to null.
		// Return the removed node.

    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
		
    return temp;
  }
}
