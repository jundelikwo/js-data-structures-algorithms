// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left === null) {
            this.left = new Node(data);
            return;
        }

        if (data > this.data && this.right === null) {
            this.right = new Node(data);
            return;
        }

        if (data < this.data) {
            this.left.insert(data);
            return;
        }

        if (data > this.data) {
            this.right.insert(data);
            return;
        }
    }

    contains(data) {
        if (data === this.data) {
            return this;
        }

        if (this.left?.data === data) {
            return this.left;
        }

        if (this.right?.data === data) {
            return this.right;
        }

        if (data < this.data && this.left) {
            return this.left.contains(data);
        }

        if (data > this.data && this.right) {
            return this.right.contains(data);
        }

        return null;
    }
}

module.exports = Node;
