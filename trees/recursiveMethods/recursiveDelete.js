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

  #recursiveDelete(value, currentNode) {
    if (this.currentNode === null) return null;

    if (value < currentNode.value) {
      currentNode.left = this.#recursiveDelete(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#recursiveDelete(value, currentNode.right);
    } else {
      // deleting leaf node
      if (currentNode.left === null && currentNode.right === null) return null;
      // deleting node that has an opening on the left and a node on the right
      else if (currentNode.left === null) {
        currentNode = currentNode.right;
      }
      // deleting node that has node on the left and an opening on the right
      else if (currentNode.right === null) {
        currentNode = currentNode.left;
      }
      // deleting a node that has a child on the left and on the right
      else {
        let subtreeMin = this.minValue(currentNode.right);

        currentNode.value = subtreeMin;
        currentNode.right = this.#recursiveDelete(
          subtreeMin,
          currentNode.right
        );
      }
    }

    return currentNode;
  }

  recursiveDelete(value) {
    this.root = this.#recursiveDelete(value, this.root);
  }
}
