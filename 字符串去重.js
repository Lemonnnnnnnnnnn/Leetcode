function quchong(str) {
    let arr = str.split('')
    let obj = {}
    let newStr = ''
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            newStr += arr[i]
            obj[arr[i]] = i
        }
    }
    return newStr
}

const aaa = 'svdnqknddd'
console.log(quchong(aaa))