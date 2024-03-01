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

  selectionSort() {
    // Step 1: If the list has fewer than 2 nodes, it's already sorted, so we return.
    if (this.length < 2) return;

    // Step 2: Initialize 'current' to head node of linked list to start the sorting.
    let current = this.head;

    // Step 3: Outer loop for traversing the linked list.
    // This loop goes through each node to find the smallest value among unsorted nodes.
    while (current.next !== null) {
      // Step 4: 'smallest' initially points to 'current' as we start looking for smallest value in each pass.
      let smallest = current;

      // Step 5: 'innerCurrent' starts at the node right after 'current'. We compare each node with 'smallest'.
      let innerCurrent = current.next;

      // Step 6: Inner loop to find smallest node among unsorted nodes starting from 'innerCurrent'.
      while (innerCurrent !== null) {
        // Step 7: If value of 'innerCurrent' is less than 'smallest', then update 'smallest'.
        if (innerCurrent.value < smallest.value) {
          smallest = innerCurrent;
        }

        // Step 8: Move 'innerCurrent' to next node to continue search for smallest value.
        innerCurrent = innerCurrent.next;
      }

      // Step 9: If smallest value is different from 'current' value, then swap their values.
      if (smallest !== current) {
        const temp = current.value;
        current.value = smallest.value;
        smallest.value = temp;
      }

      // Step 10: Move 'current' to the next node to continue with the sorting process.
      current = current.next;
    }

    // Step 11: Update 'tail' to 'current' as 'current' will be at last node after sorting.
    this.tail = current;
  }
}
