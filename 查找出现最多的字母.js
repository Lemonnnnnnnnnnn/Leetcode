const str = 'aslkxlczlkemf'

function test(str) {
    const arr = str.split('').sort()
    const obj = {}
    let maxNumber = 0
    let zimu = ''

    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]] += 1
        }

        if (obj[arr[i]] > maxNumber) {
            maxNumber = obj[arr[i]]
            zimu = arr[i]
        }
    }

    return { [zimu]: maxNumber }
}

console.log(test(str))