function reverse(str) {
    let arr = str.split('')
    arr.reverse()
    let result = arr.toString()
    result = result.replace(/[,]+/g, '')
    return result
}

const aaa = 'xvcnwfekl'
console.log(reverse(aaa))
