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

  DFSPreOrder() {
    let results = [];

    function traverse(currentNode) {
      results.push(currentNode.value);

      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }

    traverse(this.root);
    return results;
  }

  DFSPostOrder() {
    let results = [];

    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);

      results.push(currentNode.value);
    }

    traverse(this.root);
    return results;
  }

  DFSInOrder() {
    let results = [];

    function traverse(currentNode) {
      if (currentNode.right) traverse(currentNode.right);

      results.push(currentNode.value);

      if (currentNode.left) traverse(currentNode.left);
    }

    traverse(this.root);
    return results;
  }
}
