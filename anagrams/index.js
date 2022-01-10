// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function formatString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
    const formattedStringA = formatString(stringA);
    const formattedStringB = formatString(stringB);

    return formattedStringA === formattedStringB;
}

// function anagrams(stringA, stringB) {
//     const formattedStringA = stringA.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const formattedStringB = stringB.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     const stringAMap = {};
//     const stringBMap = {};

//     if (formattedStringA.length !== formattedStringB.length) {
//         return false;
//     }

//     for (let i = 0; i < formattedStringA.length; i++) {
//         const strAChar = formattedStringA[i];
//         const strBChar = formattedStringB[i];

//         stringAMap[strAChar] = stringAMap[strAChar] + 1 || 1;
//         stringBMap[strBChar] = stringBMap[strBChar] + 1 || 1;
//     }

//     for (const char in stringAMap) {
//        if (stringAMap[char] !== stringBMap[char]) {
//            return false;
//        }
//     }

//     return true;
// }

module.exports = anagrams;
