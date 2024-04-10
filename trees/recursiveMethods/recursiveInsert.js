class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  #recursiveInsert(value, currentNode = this.root) {
    if (this.currentNode === null) return new Node(value);

    if (value < currentNode.value) {
      currentNode.left = this.#recursiveInsert(value, currentNode.left);
    } else {
      currentNode.right = this.#recursiveInsert(value, currentNode.right);
    }

    return currentNode;
  }

  recursiveInsert(value) {
    // inserting a node into an empty tree
    if (this.root === null) this.root = new Node(value);
    this.#recursiveInsert(value);
  }
}
