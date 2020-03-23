/**
 * @param {string} s
 * @return {number}
 */

const dist = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const dist2 = {
    0: 'I',
    1: 'V',
    2: 'X',
    3: 'L',
    4: 'C',
    5: 'D',
    6: 'M'
}

const dist3 = {
    I: 0,
    V: 1,
    X: 2,
    L: 3,
    C: 4,
    D: 5,
    M: 6
}

var romanToInt = function (s) {
    // let result = {}
    let num = 0
    for (let i in s) {
        console.log(i)
        // 第一个数和第二个数的字符串
        const fstValue = s[i]
        const secValue = s[parseInt(i) + 1]
        // 第一个数在字典中的index ，用index后两位去字典里找目标str 
        const index = dist3[s[i]]

        // 用后两位的值dist2[index + 1]和dist2[index + 2] 和第二个数做对比，如果相同，则减去第一个数代表的值
        if (secValue && (secValue === dist2[index + 1] || secValue === dist2[index + 2])) {
            console.log(secValue)
            num -= dist[fstValue]
        } else {
            num += dist[fstValue]
        }
    }
    return num
};


console.log(romanToInt("MCM"))