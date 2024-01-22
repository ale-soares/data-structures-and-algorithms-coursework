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
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  shift() {
    if (this.length === 0) return undefined;

    let temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
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
    return temp;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const temp = this.get(index);

    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;

    this.length--;
    return true;
  }
}
