// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let newArr = [];
    let remainder = array;
    
    while (remainder.length) {
        newArr.push(remainder.slice(0, size));
        remainder = remainder.slice(size);
    }

    return newArr;
}

// function chunk(array, size) {
//     const newArr = [];
//     let index = 0;
  
//     while (index < array.length) {
//       newArr.push(array.slice(index, index + size));
//       index += size;
//     }
  
//     return newArr;
// }

// function chunk(array, size) {
//     const newArr = [];

//     for (elem of array) {
//         const lastChunk = newArr[newArr.length - 1];
        
//         if (!lastChunk || lastChunk.length === size) {
//             newArr[newArr.length] = [elem];
//         } else {
//             lastChunk.push(elem);
//         }
//     }

//     return newArr;
// }

// function chunk(array, size) {
//     const newArr = [];

//     for (let i = 0; i < array.length; i++) {
//         const elem = array[i];
//         const pos = parseInt(i / size);
        
//         if (newArr[pos]) {
//             newArr[pos].push(elem);
//         } else {
//             newArr[pos] = [elem];
//         }
//     }

//     return newArr;
// }

module.exports = chunk;
