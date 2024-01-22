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

  shift() {
    if (this.length === 0) return undefined

		let temp = this.head

		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = this.head.next
			this.head.prev = null
			temp.next = null
		}

		this.length --
		return temp
  }
}
