// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let formattedStr = str.toLowerCase();
    let vowelsArr = formattedStr.match(/[aeiou]/g) || [];

    return vowelsArr.length;
}

// function vowels(str) {
//     let formattedStr = str.toLowerCase();
//     let vowelsList = ['a', 'e', 'i', 'o', 'u']
//     let vowelsCount = 0;

//     for (const char of formattedStr) {
//         if (vowelsList.includes(char)) {
//             vowelsCount++;
//         }
//     }

//     return vowelsCount;
// }

// function vowels(str) {
//     let formattedStr = str.toLowerCase();
//     let vowelsCount = 0;

//     for (const char of formattedStr) {
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
