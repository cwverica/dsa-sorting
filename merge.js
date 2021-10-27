function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let newArr = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++
        } else {
            newArr.push(arr2[j]);
            j++
        }
    }
    if (i < arr1.length) newArr.push(...arr1.slice(i)); // less efficient, but prettier
    // if (i < arr1.length) {
    //     while (i < arr1.length) {
    //         newArr.push(arr1[i]);
    //         i++
    //     }
    // }
    if (j < arr2.length) newArr.push(...arr2.slice(j)); // less efficient, but prettier
    // if (j < arr2.length) {
    //     while (j < arr2.length) {
    //         newArr.push(arr2[j]);
    //         j++
    //     }
    // }

    return newArr;
}

function mergeSort(arr) {

    if (arr.length > 1) {
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid))
        return merge(left, right);
    } else return arr;
}

module.exports = { merge, mergeSort };