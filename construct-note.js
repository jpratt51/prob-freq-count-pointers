// add whatever parameters you deem necessary
function freqCounterHelper(str) {
    let frequency = {};
    for (let letter of str) {
        frequency[letter] = frequency[letter] + 1 || 1;
    }
    return frequency;
}

function constructNote(str1, str2) {
    if (str2.length < str1.length) return false;
    const str1Count = freqCounterHelper(str1);
    const str2Count = freqCounterHelper(str2);
    for (let letter of str1) {
        if (str1Count[letter] > str2Count[letter]) {
            return false;
        }
    }
    return true;
}

module.exports = constructNote;
