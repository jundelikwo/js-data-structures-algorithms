// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    #addStack = new Stack()

    #removeStack = new Stack()

    add = (item) => {
        this.#addStack.push(item);
    }

    remove = () => {
        while (this.#addStack.peek() !== undefined) {
            this.#removeStack.push(this.#addStack.pop());
        }

        const result = this.#removeStack.pop();

        while (this.#removeStack.peek() !== undefined) {
            this.#addStack.push(this.#removeStack.pop());
        }

        return result;
    }

    peek = () => {
        while (this.#addStack.peek() !== undefined) {
            this.#removeStack.push(this.#addStack.pop());
        }

        const result = this.#removeStack.peek();

        while (this.#removeStack.peek() !== undefined) {
            this.#addStack.push(this.#removeStack.pop());
        }

        return result;
    }
}

module.exports = Queue;
