
function test(a, b) {
    let obj = {}
    let resStr = []
    for (let i = 0; i < 26; i++) {
        obj[String.fromCharCode(i + 97)] = i
    }

    return jisuan(a.length - 1, b.length - 1, false)

    function jisuan(length1, length2, add) {
        /**
         * 如何开始？
         * 1.判断index1 ，index2 , flag ,并计算目标数字
         *  1.1 如果index1 == -1 ，index2 != -1 ，目标数字等于index2 || index2 + 1 
         *  1.2 如果index1 != -1 , index2 == -1 , 目标数字等于index1 || index1 + 1
         *  1.3 如果index1 != -1 且 index2 != -1 ， 目标数字等于 index1 + index2 || index1 + index2 + 1
         *  1.4 如果index1 == -1 且 index2 == -1 , 目标数字等于 return || 1
         *
         * 2.判断
         *  2.1如果小于25，得出现在数字unshift进resStr，把flag设为false ， 把index1 - 1 , index2 - 1，进行下次循环
         *  2.2如果大于25，得出现在数字-25 unshift进resStr，并把flag设为true，把index1 - 1 , index2 - 1，进行下次循环
         * 3.进行下一次循环
         * 
         * 
         */
        let current = ''

        // 1.4
        if (length1 === -1 && length2 === -1) {
            if (add) {
                resStr.unshift('a')
                return resStr
            } else return resStr
            // 1.1
        } else if (length1 === -1 && length2 !== -1) {
            if (add) {
                current = obj[b[length2]] + 1
                if (current <= 25) {
                    resStr.unshift(String.fromCharCode(current + 97))
                    length2--
                    add = false
                    return jisuan(length1, length2, add)
                } else {
                    resStr.unshift(String.fromCharCode(current + 97 - 25))
                    length2--
                    add = true
                    return jisuan(length1, length2, add)
                }
            } else {
                resStr.unshift(b[length2])
                length2--
                add = false
                return jisuan(length1, length2, add)
            }
            // 1.2
        } else if (length1 !== -1 && length2 === -1) {
            if (add) {
                current = obj[a[length1]] + 1
                if (current <= 25) {
                    resStr.unshift(String.fromCharCode(current + 97))
                    length1--
                    add = false
                    return jisuan(length1, length2, add)
                } else {
                    resStr.unshift(String.fromCharCode(current + 97 - 25))
                    length1--
                    add = true
                    return jisuan(length1, length2, add)
                }
            } else {
                resStr.unshift(a[length1])
                length1--
                add = false
                return jisuan(length1, length2, add)
            }
            // 1.3
        } else if (length1 !== -1 && length2 !== -1) {
            if (add) {
                current = obj[a[length1]] + obj[b[length2]] + 1
                if (current <= 25) {
                    resStr.unshift(String.fromCharCode(current + 97))
                    length1--
                    length2--
                    add = false
                    return jisuan(length1, length2, add)
                } else {
                    resStr.unshift(String.fromCharCode(current + 97 - 25))
                    length1--
                    length2--
                    add = true
                    return jisuan(length1, length2, add)
                }
            } else {
                current = obj[a[length1]] + obj[b[length2]]
                if (current <= 25) {
                    resStr.unshift(String.fromCharCode(current + 97))
                    length1--
                    length2--
                    add = false
                    return jisuan(length1, length2, add)
                } else {
                    resStr.unshift(String.fromCharCode(current + 97 - 25))
                    length1--
                    length2--
                    add = true
                    return jisuan(length1, length2, add)
                }
            }
        }

    }
}

const one = 'zb'
const two = 'dbb'

console.log(test(one, two))