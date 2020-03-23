/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = ''
    let index = 0
    if (!strs.toString().length) return result
    if (strs.length === 1) {
        result += strs[0]
        return result
    }

    function test() {
        let flag = true
        let temporaryStr = null

        for (let i = 0; i < strs.length; i++) {
            if (temporaryStr === null) {
                temporaryStr = strs[i][index]
            }

            if (temporaryStr !== strs[i][index]) {
                flag = false
                break
            }
            temporaryStr = strs[i][index]
        }

        if (flag && result !== strs[0]) {
            result += temporaryStr
            index += 1
            test()
        } else {
            return result
        }
    }
    test()
    return test()
}

const arr = ["a", "a"]
console.log(longestCommonPrefix(arr))