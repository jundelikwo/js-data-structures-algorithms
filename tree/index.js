// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const newNode = new Node(data);
        this.children.push(newNode);
    }

    remove(data) {
        this.children = this.children.filter(item => item.data !== data);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // traverseBF(fn) {
    //     let nodes = [this.root];

    //     while(nodes.length) {
    //         const currentNode = nodes.shift();
    //         fn(currentNode);
    //         nodes.push(...currentNode.children);
    //     }
    // }

    traverseBF(fn) {
        let nodes = [this.root];
        let pos = 0;

        while(pos < nodes.length && nodes[pos]) {
            fn(nodes[pos]);
            nodes.push(...nodes[pos].children);
            pos++;
        }
    }

    // traverseDF(fn) {
    //     let nodes = [this.root];

    //     while(nodes.length) {
    //         const currentNode = nodes.shift();
    //         fn(currentNode);
    //         nodes.unshift(...currentNode.children);
    //     }
    // }

    traverseDF(fn, currentNode = this.root) {
        if (!currentNode) {
            return;
        }
        fn(currentNode);

        currentNode.children.forEach(item => this.traverseDF(fn, item));
    }
}

module.exports = { Tree, Node };
