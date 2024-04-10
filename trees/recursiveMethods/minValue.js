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

  minValue(currentNode) {
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }
}
