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

  get(index) {
    if (index < 0 || index >= this.length) return undefined

		let temp = this.head

		if(index < this.length/2) {
			for (let i = 0; i < index; i++) {
				temp = temp.next
			}
		} else {
			temp = this.tail
			for (let i = this.length - 1; i > index; i--) {
				temp = temp.prev
			}
		}

		return temp
  }
}
