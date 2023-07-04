// add whatever parameters you deem necessary

function freqCounterHelper(arr) {
    let freqCounter = {};
    for (let char of arr) {
        freqCounter[char] = freqCounter[char] + 1 || 1;
    }
    return freqCounter;
}

function sameFrequency(num1, num2) {
    let num1str = String(num1);
    let num2str = String(num2);
    if (num1str.length !== num2str.length) return false;
    let str1ArrCount = freqCounterHelper(num1str);
    let str2ArrCount = freqCounterHelper(num2str);
    for (let char of Object.keys(str1ArrCount)) {
        if (str1ArrCount[char] !== str2ArrCount[char]) return false;
    }
    return true;
}

module.exports = sameFrequency;
