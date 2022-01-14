// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 1) {
    if (row > n) {
        return;
    }

    let res = '#'.repeat(row) + ' '.repeat(n - row);
    console.log(res);

    return steps(n, row + 1);
}

// function steps(n) {
//     for (let row = 1; row <= n; row++) {
//         let res = '#'.repeat(row) + ' '.repeat(n - row);

//         console.log(res);
//     }
// }

// function steps(n, row = 0, stair = '') {
//     if (n === row) {
//         return;
//     }

//     if (stair.length === n) {
//         // End of the row
//         console.log(stair);

//         // Go to the next row
//         return steps(n, row + 1);
//     }

//     stair += stair.length <= row ? '#' : ' ';

//     return steps(n, row, stair);
// }

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let res = '';

//         for (let col = 0; col < n; col++) {
//             res += col > row ? ' ' : '#';
//         }

//         console.log(res);
//     }
// }

module.exports = steps;
