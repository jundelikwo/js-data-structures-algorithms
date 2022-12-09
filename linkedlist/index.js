// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let length = 0;
        let node = this.head;

        while(node) {
            length++;
            node = node.next;
        }

        return length;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        while(node?.next) {
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head?.next || null;
    }

    removeLast() {
        if (!this.head || !this.head.next) {
            this.head = null;
            return;
        }

        let node = this.head;

        while(node.next.next) {
            node = node.next;
        }
        
        node.next = null;
    }

    insertLast(data) {
        let node = this.getLast();
        if (!node) {
            this.insertFirst(data);
            return;
        }

        node.next = new Node(data);
    }

    getAt(index) {
        let node = this.head;
        let counter = 0;

        while(node) {
            if (counter === index) {
                break;
            }

            counter++;
            node = node.next;
        }

        return node;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previousNode = this.getAt(index - 1);
        
        if (!previousNode || !previousNode.next) {
            return;
        }

        previousNode.next = previousNode.next.next;
    }

    insertAt(data, index) {
        if (index === 0 || !this.head) {
            this.insertFirst(data);
            return;
        }

        let previousNode = this.head;
        let counter = 0;

        while(previousNode.next) {
            if (counter === index - 1) {
                break;
            }

            counter++;
            previousNode = previousNode.next;
        }

        // const previousNode = this.getAt(index - 1) || this.getLast();

        previousNode.next = new Node(data, previousNode.next);
    }

    forEach(callback) {
        let node = this.head;
        let counter = 0;

        while(node) {
            callback(node, counter);

            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;

        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
