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

  insertionSort() {
    // Step 1: If the list has less than 2 nodes,
    // it's already sorted. We return.
    if (this.length < 2) {
      return;
    }

    // Step 2: Initialize the head of the sorted part
    // of the list to the first node.
    let sortedListHead = this.head;

    // Step 3: Initialize the head of the unsorted part
    // to the second node.
    let unsortedListHead = this.head.next;

    // Step 4: Detach the sorted part from the unsorted part.
    sortedListHead.next = null;

    // Step 5: Loop through each node in the unsorted part.
    while (unsortedListHead !== null) {
      // Step 6: 'current' will be inserted into sorted part.
      let current = unsortedListHead;

      // Step 7: Update the head of the unsorted list.
      unsortedListHead = unsortedListHead.next;

      // Step 8: If 'current' is smaller than the head
      // of the sorted list, insert 'current' before it.
      if (current.value < sortedListHead.value) {
        current.next = sortedListHead;
        sortedListHead = current;

        // Step 9: Otherwise, find the correct spot for 'current'.
      } else {
        let searchPointer = sortedListHead;

        // Step 10: Traverse the sorted list to find the
        // insertion point for 'current'.
        while (
          searchPointer.next !== null &&
          current.value > searchPointer.next.value
        ) {
          searchPointer = searchPointer.next;
        }

        // Step 11: Insert 'current' into its correct position
        // in the sorted list.
        current.next = searchPointer.next;
        searchPointer.next = current;
      }
    }

    // Step 12: Update the head of the list to the head
    // of the sorted list.
    this.head = sortedListHead;

    // Step 13: Update 'tail' to point to the last node
    // in the sorted list.
    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    this.tail = temp;
  }
}
