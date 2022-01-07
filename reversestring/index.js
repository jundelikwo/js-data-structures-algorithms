// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, character) =>
        character + reversed
    , '');
}

// function reverse(str) {
//     let reversedStr = '';

//     for (character of str) {
//         reversedStr = character + reversedStr;
//     }

//     return reversedStr;
// }

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

module.exports = reverse;
