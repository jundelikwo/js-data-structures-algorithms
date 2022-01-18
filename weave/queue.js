// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  #data = []

  add = (item) => {
    this.#data.push(item)
  }

  remove = () => {
    return this.#data.shift()
  }

  peek = () => {
    return this.#data[0];
  }
}

module.exports = Queue;
