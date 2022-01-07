// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseStr(str) {
    return str.split('').reverse().join('');
}

function reverseInt(num) {
    const reversed = parseInt(reverseStr(num.toString()));

    return reversed * Math.sign(num);
}

module.exports = reverseInt;
