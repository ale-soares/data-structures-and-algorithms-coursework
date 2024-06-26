class Heap {
  #heap = [];

  getHeap() {
    return [...this.#heap];
  }

  #leftChild(index) {
    // start with 0 instead of starting with 1
    return 2 * index + 1;
  }

  #rightChild(index) {
    return 2 * index + 2;
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }
}
