// LL: Binary to Decimal ( ** Interview Question)
// Objective:
// You have a linked list where each node represents a binary digit (0 or 1). The goal of the binaryToDecimal function is to convert this binary number, represented by the linked list, into its decimal equivalent.

// How Binary to Decimal Conversion Works:
// In binary-to-decimal conversion, each position of a binary number corresponds to a specific power of 2, starting from the rightmost digit.
// The rightmost digit is multiplied by 2^0 (which equals 1).
// The next digit to the left is multiplied by 2^1 (which equals 2).
// The digit after that is multiplied by 2^2 (which equals 4). ... and so on.

// To find the decimal representation:
// Multiply each binary digit by its corresponding power of 2 value.
// Sum up all these products.

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
    this.length = 1;
  }

  // Define the binaryToDecimal function for the LinkedList class
  binaryToDecimal() {
    // Initialize variable 'num' to 0. This will store the final decimal value.
    let num = 0;

    // Initialize 'current' to point to the head of the linked list.
    // 'current' will be used to traverse through the list.
    let current = this.head;

    // Loop through each node in the linked list until 'current' is null.
    // If 'current' is null, it means we have reached the end of the list.
    while (current !== null) {
      // Perform binary to decimal conversion for the current digit.
      // Multiply 'num' by 2 to shift its binary value one place to the left,
      // and add the value of the current node ('current.value').
      // This constructs the binary number in a left-to-right fashion.
      num = num * 2 + current.value;

      // Move 'current' to the next node in the list,
      // so that the loop can continue to the next digit.
      current = current.next;
    }

    // Return the final decimal value stored in 'num' after
    // converting the entire binary number.
    return num;
  }
}
