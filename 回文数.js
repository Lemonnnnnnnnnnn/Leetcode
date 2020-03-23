var lengthOfLongestSubstring = function (x) {
    // 数字解法1
    if (x < 0) return false

    const length = x.toString().length
    if (length === 1) return true
    let flag = true

    if (length % 2 === 0) {
        for (var i = 0; i < length / 2; i++) {
            const left1 = x % Math.pow(10, length - i)
            const left2 = left1 / Math.pow(10, length - (i + 1))
            const left3 = Math.floor(left2)

            const right1 = x % Math.pow(10, i + 1)
            const right2 = right1 / Math.pow(10, i)
            const right3 = Math.floor(right2)

            if (left3 !== right3) flag = false
        }
    } else {
        for (var i = 0; i < (length - 1) / 2; i++) {
            const left1 = x % Math.pow(10, length - i)
            const left2 = left1 / Math.pow(10, length - (i + 1))
            const left3 = Math.floor(left2)

            const right1 = x % Math.pow(10, i + 1)
            const right2 = right1 / Math.pow(10, i)
            const right3 = Math.floor(right2)

            if (left3 !== right3) flag = false
        }
    }

    return flag

    // console.log(flag)

    // if (length % 2) {

    // } else {

    // }

    // 字符串解法1
    // if (x < 0) return false

    // let str = x.toString()
    // let reverse = str.split("").reverse().toString().replace(/,/g, '')

    // if (str === reverse) {
    //     return true
    // } else {
    //     return false
    // }
    // 字符串解法2
    // if (x < 0) return false
    // const arr = x.toString().split('')
    // const reverse = arr.reverse().toString().replace(/,/g, '')

    // return !(x - reverse)
}


console.log(lengthOfLongestSubstring(123123))