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
    this.tail = this.head;
    this.length = 1;
  }

  pop() {
    if (this.length === 0) return undefined;

    let temp = this.tail;

		if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			temp.prev = null;
		}

    this.length--;
		return temp
  }
}
