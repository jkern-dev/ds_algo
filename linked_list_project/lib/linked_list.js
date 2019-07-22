// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// ----------

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
      this.tail = current;
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
        this.tail = null;
        this.head = null;
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

    set(index, val) {
      let updateNode = this.get(index);
      if (!updateNode) return false;
      updateNode.value = val;
      return true;
    }

    insert(index, val) {
      if (index >= this.length) return false;
      let newNode = new Node(val);
      if (index === 0) {
        this.addToHead(val);
        return true;
      }
      let startNode = this.get(index-1);
      if (!startNode) return false;
      let nextNode = startNode.next;
      newNode.next = nextNode;
      startNode.next = newNode;
      this.length++;
      return true;
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

    size() {
      return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
