// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// function levelWidth(root) {
//     let counters = [0];
//     let arr = [root, 's'];

//     while(arr.length > 1) {
//         const node = arr.shift();

//         if (node === 's') {
//             counters.push(0);
//             arr.push('s');
//         } else {
//             arr.push(...node.children);
//             counters[counters.length - 1]++;
//         }
//     }

//     return counters;
// }

function levelWidth(root) {
    let width = [];
    let nodes = [root];
    let start = 0;
    let end = nodes.length;

    while(start < end) {
        width.push(end - start);
        for (let i = start; i < end; i++) {
            nodes.push(...nodes[i].children);
        }
        start = end;
        end = nodes.length;
    }

    return width;
}

module.exports = levelWidth;
