// add whatever parameters you deem necessary

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
    if (str2.length < str1.length) return false;
    let compareStr = "";
    const str1Arr = str1.split("");
    const str2Arr = str2.split("");
    let pointer1 = 0;
    let pointer2 = 0;
    while (pointer2 < str2Arr.length) {
        if (str1Arr[pointer1] === str2Arr[pointer2]) {
            compareStr = compareStr + str2Arr[pointer2];
            pointer1++;
            pointer2++;
        } else {
            pointer2++;
        }
    }
    console.log(compareStr);
    if (compareStr === str1) {
        return true;
    } else {
        return false;
    }
}

module.exports = isSubsequence;
