


// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = []
    const newArr = nums.sort((a, b) => a - b)

    const zeroPosi = newArr.indexOf(0)
    let rightPosi = zeroPosi + 1
    let leftPosi = zeroPosi - 1
    let secPosi = 0

    if (zeroPosi) {
        test(rightPosi, leftPosi)
    }

    function test(rightPosi, leftPosi) {
        if(newArr[rightPosi] + newArr[leftPosi] === 0){
            
            leftPosi += 1
            result.push([newArr[zeroPosi], newArr[leftPosi], newArr[rightPosi]])
            leftPosi >= 0 && rightPosi <= newArr.length && test(rightPosi, leftPosi)
        }
        // if (newArr[rightPosi] + newArr[leftPosi] > 0) {
        //     leftPosi -= 1
        //     leftPosi >= 0 && test(rightPosi, leftPosi)

        // } else if (newArr[rightPosi] + newArr[leftPosi] < 0) {
        //     rightPosi += 1
        //     rightPosi <= newArr.length && test(rightPosi, leftPosi)
        // } else {
        //     result.push([newArr[zeroPosi], newArr[leftPosi], newArr[rightPosi]])
        //     leftPosi -= 1
        //     rightPosi += 1
        //     leftPosi >= 0 && rightPosi <= newArr.length && test(rightPosi, leftPosi)
        // }
    }

    return result
};

const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))

let test = [-4, -1, -1, 0, 1, 2]