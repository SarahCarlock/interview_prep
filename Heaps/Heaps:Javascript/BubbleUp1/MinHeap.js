class MinHeap {
    constructor() {
      this.heap = [ null ];
      this.size = 0;
    }
    add(value) {
      console.log(this.heap, `Add ${value} to the heap.`);
      this.heap.push(value);
      this.size++;
      this.bubbleUp();
    }
    bubbleUp() {
      console.log('Bubble Up');
    }
  }
  module.exports = MinHeap;
  