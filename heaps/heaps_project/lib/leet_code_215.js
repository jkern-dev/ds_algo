// https://leetcode.com/problems/kth-largest-element-in-an-array/

class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2)
  }

  getLeftChild(idx) {
    return idx * 2
  }

  getRightChild(idx) {
    return (idx * 2) + 1
  }

  siftUp(idx) {
    if (idx === 1) return;
    let parIdx = this.getParent(idx);
    if (this.array[parIdx] > this.array[idx]) return;
    [this.array[parIdx], this.array[idx]] = [this.array[idx], this.array[parIdx]];
    this.siftUp(parIdx);
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    if (this.array.length <= 2) return;
    let leftChild = this.getLeftChild(idx);
    let rightChild = this.getRightChild(idx);
    let leftVal = this.array[leftChild];
    let rightVal = this.array[rightChild];
    if (!leftVal) leftVal = -Infinity;
    if (!rightVal) rightVal = -Infinity;
    if (this.array[idx] > leftVal && this.array[idx] > rightVal) return;
    if (leftVal > rightVal) {
      [this.array[idx], this.array[leftChild]] = [this.array[leftChild], this.array[idx]]
      this.siftDown(leftChild);
    } else {
      [this.array[idx], this.array[rightChild]] = [this.array[rightChild], this.array[idx]]
      this.siftDown(rightChild);
    }
  }

  deleteMax() {
    if (this.array.length === 1) return null;
    if (this.array.length === 2) return this.array.pop();
    let returnVar = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return returnVar;
  }
}


var findKthLargest = function (nums, k) {
  let heap = new MaxHeap();
  nums.forEach(num => heap.insert(num));
  let sorted = []
  while (sorted.length < k) {
    sorted.unshift(heap.deleteMax());
  }
  return sorted[0];
};
