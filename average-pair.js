// add whatever parameters you deem necessary
function averagePair(sortedArr, targetAvg) {
    let left = 0;
    let right = sortedArr.length - 1;
    while (left < right) {
        if ((sortedArr[left] + sortedArr[right]) / 2 === targetAvg) {
            return true;
        } else if ((sortedArr[left] + sortedArr[right]) / 2 < targetAvg) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

module.exports = averagePair;
