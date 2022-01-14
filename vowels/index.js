// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowelsArr = str.match(/[aeiou]/gi) || [];

    return vowelsArr.length;
}

// function vowels(str) {
//     let vowelsList = ['a', 'e', 'i', 'o', 'u']
//     let vowelsCount = 0;

//     for (const char of str.toLowerCase()) {
//         if (vowelsList.includes(char)) {
//             vowelsCount++;
//         }
//     }

//     return vowelsCount;
// }

// function vowels(str) {
//     let vowelsCount = 0;

//     for (const char of str.toLowerCase()) {
//         switch (char) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 vowelsCount++;        
//             default:
//                 break;
//         }
//     }

//     return vowelsCount;
// }

module.exports = vowels;
