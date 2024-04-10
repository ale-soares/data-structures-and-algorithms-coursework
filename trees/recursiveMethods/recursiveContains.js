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

  recursiveContains(value, currentNode = this.root) {
    if (this.currentNode === null) return false;

    if (value === currentNode.value) return true;

    if (value < currentNode.value) {
      return this.recursiveContains(value, currentNode.left);
    } else {
      return this.recursiveContains(value, currentNode.right);
    }
  }
}
