/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 === 1) {
        return false
    }
    const dist = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const leftArr = []

    for (let i of s) {
        console.log(leftArr)
        if (i in dist) {
            leftArr.push(i)
        } else {
            if (i !== dist[leftArr.pop()]) return false
            // if (i === dist[leftArr[leftArr.length - 1]]) {
            //     leftArr.splice(leftArr.length - 1, 1)
            // } else {
            //     return false
            // }
        }
    }
    return !leftArr.length
};

console.log(isValid('({)}'))