function change(num) {
    const str = num + ''
    let index = 0

    function multiply(val) {
        index++
        let newNum = 1
        for (let i of val) {
            newNum = newNum * i
        }
        if (newNum.toString().length === 1) {
            return index
        } else {
            return multiply(newNum.toString())
        }
    }

    return multiply(str)

}

parseInt
const number = 285
console.log(change(number))