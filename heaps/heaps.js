class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parentIdx = this.getParent(idx);

    if (this.array[parentIdx] < this.array[idx]) {
      [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
      this.siftUp(parentIdx);
    }
  }

  deleteMax() {
    if (this.array.length === 2) return this.array.pop();
    if (this.array.length === 1) return null;

    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }

  siftDown(idx) {
    let ary = this.array;
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let leftVal = ary[leftIdx];
    let rightVal = ary[rightIdx];

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if (ary[idx] > leftVal && ary[idx] > rightVal) return;

    if (leftVal < rightVal) {
      var swapIdx = rightIdx;
    } else {
      var swapIdx = leftIdx;
    }

    [ary[idx], ary[swapIdx]] = [ary[swapIdx], ary[idx]];
    this.siftDown(swapIdx);
  }

  // o(nLog(n)) time complexity, O(n) space
  heapSort(array) {
    // Step 1: build the heap
    let heap = new MaxHeap();
    array.forEach(num => heap.insert(num));

    // Step 2: constructed the sorted array
    let sorted = [];
    while (heap.array.length > 1) {
      sorted.push(heap.deleteMax());
    }

    return sorted;
  }

  // O(nLog(n)) time, O(1) space
  heapify(array, n, i) {
    let leftIdx = 2 * i + 1;
    let rightIdx = 2 * i + 2;

    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];

    if (leftIdx >= n) leftVal = -Infinity;
    if (rightIdx >= n) rightVal = -Infinity;

    if (array[i] > leftVal && array[i] > rightVal) return;

    let swapIdx;
    if (leftVal < rightVal) {
      swapIdx = rightIdx;
    } else {
      swapIdx = leftIdx;
    }
    swap(array, i, swapIdx);
    heapify(array, n, swapIdx);
  }
}


// In-Place Heap Sort

function heapSort(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }

  for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
    swap(array, endOfHeap, 0);
    heapify(array, endOfHeap, 0);
  }

  return array;
}

function heapify(array, n, i) {
  let leftIdx = 2 * i + 1;
  let rightIdx = 2 * i + 2;

  let leftVal = array[leftIdx];
  let rightVal = array[rightIdx];

  if (leftIdx >= n) leftVal = -Infinity;
  if (rightIdx >= n) rightVal = -Infinity;

  if (array[i] > leftVal && array[i] > rightVal) return;

  let swapIdx;
  if (leftVal < rightVal) {
    swapIdx = rightIdx;
  } else {
    swapIdx = leftIdx;
  }
  swap(array, i, swapIdx);
  heapify(array, n, swapIdx);
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}