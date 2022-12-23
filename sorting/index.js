// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swapped = true;
                const temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }

        if (!swapped) {
            break;
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i) {
            const temp = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = temp;
        };
    }

    return arr;
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const midpoint = Math.floor(arr.length / 2);
    let left = arr.slice(0, midpoint);
    let right = arr.slice(midpoint);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftCounter = 0;
    let rightCounter = 0;

    while(leftCounter < left.length && rightCounter < right.length) {
        if (left[leftCounter] < right[rightCounter]) {
            result.push(left[leftCounter]);
            leftCounter++;
        } else {
            result.push(right[rightCounter]);
            rightCounter++;
        }
    }

    while(leftCounter < left.length) {
        result.push(left[leftCounter]);
        leftCounter++;
    }

    while(rightCounter < right.length) {
        result.push(right[rightCounter]);
        rightCounter++;
    }

    return result;
}

function quickSort(arr) {
    return qs(arr, 0, arr.length - 1);
}

function qs(arr, low, high) {
    if (low >= high) {
        return arr;
    }

    const pivotIndex = partition(arr, low, high);

    qs(arr, low, pivotIndex - 1);
    qs(arr, pivotIndex + 1, high);

    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let partitionIndex = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] < pivot) {
            partitionIndex++;
            const temp = arr[i];
            arr[i] = arr[partitionIndex];
            arr[partitionIndex] = temp;
        }
    }

    partitionIndex++;
    arr[high] = arr[partitionIndex];
    arr[partitionIndex] = pivot;

    return partitionIndex;
}

module.exports = {
    bubbleSort,
    selectionSort,
    mergeSort,
    merge,
    quickSort,
};
