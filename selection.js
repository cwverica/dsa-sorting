function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimum = [arr[i], i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < minimum[0]) {
                minimum = [arr[j], j];
            }
        }
        let temp = arr[i];
        arr[i] = minimum[0];
        arr[minimum[1]] = temp;
    }
    return arr;
}

module.exports = selectionSort;