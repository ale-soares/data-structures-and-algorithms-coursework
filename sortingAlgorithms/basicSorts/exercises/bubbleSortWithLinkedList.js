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

  bubbleSort() {
    if (this.length < 2) return;

    let sortedUntil = null;

    while (sortedUntil !== this.head.next) {
      let current = this.head;

      while (current.next !== sortedUntil) {
        let nextNode = current.next;

        if (current.value > nextNode.value) {
          const temp = current.value;

          current.value = nextNode.value;
          nextNode.value = temp;
        }

        current = current.next;
      }

      sortedUntil = current;
    }
  }
}
