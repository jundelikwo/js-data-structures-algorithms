// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 1) {
    if (row > n) {
        return;
    }

    const StrLen = n * 2 - 1;

    let poundLen = row * 2 - 1;
    let spaceLen = StrLen - poundLen;
    let sideSpaceLen = Math.floor(spaceLen / 2);
    let res = ' '.repeat(sideSpaceLen)
        + '#'.repeat(poundLen) + ' '.repeat(sideSpaceLen);

    console.log(res);

    return pyramid(n, row + 1);
}

// function pyramid(n) {
//     const StrLen = n * 2 - 1;

//     for (let row = 1; row <= n; row++) {
//         let poundLen = row * 2 - 1;
//         let spaceLen = StrLen - poundLen;
//         let sideSpaceLen = Math.floor(spaceLen / 2);
//         let res = ' '.repeat(sideSpaceLen)
//             + '#'.repeat(poundLen) + ' '.repeat(sideSpaceLen);

//         console.log(res);
//     }
// }

// function pyramid(n, row = 0, level = '') {
//     if (row === n) {
//         return;
//     }

//     const StrLen = n * 2 - 1;

//     if (level.length === StrLen) {
//         console.log(level);
//         return pyramid(n, row + 1);
//     }

//     const midpoint = Math.floor((StrLen) / 2);
//     let add;

//     if (midpoint - row <= level.length && midpoint + row >= level.length) {
//         add = '#';
//     } else {
//         add = ' ';
//     }
    
//     return pyramid(n, row, level + add);
// }

// function pyramid(n) {
//     const StrLen = n * 2 - 1;
//     const midpoint = Math.floor((StrLen) / 2);

//     for (let row = 0; row < n; row++) {
//         let level = '';

//         for (let column = 0; column < StrLen; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//             level += '#';
//             } else {
//             level += ' ';
//             }
//         }

//         console.log(level);
//     }
// }

module.exports = pyramid;
