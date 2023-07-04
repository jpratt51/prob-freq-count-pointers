// add whatever parameters you deem necessary

// Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

// I want to avoid nested loop, which means I need to use a frequency counter
// my first loop needs to create an object out of the keys from arr1 with the values set to null
// if the second arr is longer than the first arr, splice the second arr so it is the same length as the first array. I think this will be arr2.splice(arr2[arr1.length - 1]) <== need to test this.

function twoArrayObject(arr1, arr2) {
    let objFromArrays = {};
    count = 0;
    if (arr2.length > arr1.length) {
        arr2.splice(arr2[arr1.length - 1]);
    }
    for (let char of arr1) {
        objFromArrays[char] = null;
    }
    for (let char of arr2) {
        if (objFromArrays[arr1[count]] === null) {
            objFromArrays[arr1[count]] = char;
            count++;
        } else {
            return objFromArrays;
        }
    }
    return objFromArrays;
}

module.exports = twoArrayObject;
