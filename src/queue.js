const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

    constructor() {
      this.items = {}
      this.frontIndex = null
      this.backIndex = null
  }

    getUnderlyingList() {
      let curr = this.items[this.frontIndex]
      let listValues = {}
      while(curr){
        listValues.value = this.frontIndex
      }
    }

    enqueue(value) {
      this.items[this.backIndex] = value
      this.backIndex++
      return value
    }

    dequeue() {
      const item = this.items[this.frontIndex]
      delete this.items[this.frontIndex]
      this.frontIndex++
      return item
    }
}

module.exports = {
  Queue
};
