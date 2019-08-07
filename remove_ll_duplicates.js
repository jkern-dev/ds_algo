class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  removeTail() {
    if (this.length < 1) return;
    let current = this.head;
    if (this.length === 1) {
      const tailNode = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return tailNode;
    }

    while (current.next != this.tail) {
      current = current.next;
    }

    const tailNode = this.tail;
    current.next = null;
    this.length--;
    return tailNode;
  }

  addToHead(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  removeHead() {
    if (this.length === 0) return;
    let removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
    }
    this.length--;
    return removed;
  }

  contains(target) {
    if (this.length === 0) return false;
    let current = this.head;
    while (current != null) {
      if (current.value === target) return true;
      current = current.next;
    }
    return false;
  }

  get(index) {
    if (index - 1 > this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  remove(index) {
    if (index === 0) return this.removeHead;
    const currNode = this.get(index - 1);
    if (!currNode) return;
    const retNode = currNode.next;
    currNode.next = currNode.next.next;
    this.length--;
    return retNode;
  }

  removeDuplicates() {
    let values = {};
    values[this.head.val] = 1;
    let current = this.head.next;
    while (current.next != null) {
      if (current.next.val in values) {
        current = current.next.next 
        this.length--;
      } else {
        values[current.next.val] = 1;
      }
    }
    return this;
  }
};


let lList = new LinkedList();
lList.addToHead(1);
lList.addToHead(2);
lList.addToHead(3);
lList.addToHead(2);

console.log(lList);
console.log("removing duplicates");
console.log(lList.removeDuplicates());
console.log(lList);
console.log("removing duplicates");
console.log(lList.removeDuplicates());
