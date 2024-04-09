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

  insert(value) {
    this.#heap.push(value);
    let current = this.#heap.length - 1;
    let greaterThanParent =
      this.#heap[current] > this.#heap[this.#parent(current)];

    while (current > 0 && greaterThanParent) {
      this.#swap(current, this.#parent(current));
      current = this.#parent(current);
    }
  }
}
