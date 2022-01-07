// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strMap = {};
    let maxCharacter = '';
    let max = 0;

    for (const char of str) {
        strMap[char] = strMap[char] + 1 || 1;
    }

    for (const char in strMap) {
        if (strMap[char] < max) break;

        max = strMap[char];
        maxCharacter = char;
    }

    return maxCharacter;
}

module.exports = maxChar;
