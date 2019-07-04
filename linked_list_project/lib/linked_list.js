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
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    // TODO: Implement the addToTail method here
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

    // TODO: Implement the removeTail method here
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

    // TODO: Implement the addToHead method here
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

    // TODO: Implement the removeHead method here
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

    // TODO: Implement the contains method here
    contains(target) {
      if (this.length === 0) return false;
      let current = this.head;
      while (current != null) {
        if (current.value === target) return true;
        current = current.next;
      }
      return false;
    }

    // TODO: Implement the get method here
    get(index) {
      if (index - 1 > this.length) return null;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }

    // TODO: Implement the set method here
    set(index, val) {
      let updateNode = this.get(index);
      if (!updateNode) return false;
      updateNode.value = val;
      return true;
    }

    // TODO: Implement the insert method here
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

    // TODO: Implement the remove method here
    remove(index) {
      if (index === 0) return this.removeHead;
      const currNode = this.get(index - 1);
      if (!currNode) return;
      const retNode = currNode.next;
      currNode.next = currNode.next.next;
      this.length--;
      return retNode;
    }

    // TODO: Implement the size method here
    size() {
      return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
