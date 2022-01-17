// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fibonacci(4) === 3

function memoize(fn) {
    const cache = {};

    return (...args) => {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
};

function slowFibonacci(n) {
    if (n < 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacci = memoize(slowFibonacci);

// const memos = {};
// function fibonacci(n) {
//     if (n < 2) {
//         return n;
//     }

//     const prevIndex = n - 1;
//     const twoPrevIndex = n -2;

//     let prevValue = memos[prevIndex];
//     let twoPrevValue = memos[twoPrevIndex];

//     if (prevValue === undefined) {
//         prevValue = memos[prevIndex] = fibonacci(prevIndex);
//     }

//     if (twoPrevValue === undefined) {
//         twoPrevValue = memos[twoPrevIndex] = fibonacci(twoPrevIndex);
//     }

//     return prevValue + twoPrevValue;
// }

// function fibonacci(n) {
//     const series = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         series[i] = series[i - 1] + series[i - 2];
//     }

//     return series[n];
// }

// This solution is O(2^n) don't EVER use it
// function fibonacci(n) {
//     if (n < 2) {
//         return n;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

module.exports = fibonacci;
