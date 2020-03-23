function bubbleSort1(arr) {
    let temporary = null
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                temporary = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temporary
            }
        }
    }
    return arr
}
const arr = [5, 8, 6, 4, 3, 1, 2, 9, 7]
console.log(bubbleSort1(arr))


function bubbleSort2(arr) {
    let temporary = null
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temporary = arr[i]
                arr[i] = arr[j]
                arr[j] = temporary
            }
        }
    }
    return arr
}
// const arr = [5, 8, 6, 4, 3, 1, 2, 9, 7]
console.log(bubbleSort2(arr))