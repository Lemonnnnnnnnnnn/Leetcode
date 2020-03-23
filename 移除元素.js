/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // 双指针方法
    // let length = nums.length
    // let res = 0
    // while (res < length) {
    //     if (nums[res] === val) {
    //         nums[res] = nums[length - 1]
    //         length--
    //     } else {
    //         res++
    //     }
    // }
    // return res


    // 排序，找出第一个index ，找出重复值
    nums.sort((a, b) => a - b)
    console.log(nums)
    const index = nums.indexOf(val)
    let repeat = 0
    for (let i in nums) {
        if (nums[i] === val) {
            repeat++
        } else if (nums[i] > val) {
            break
        }
    }
    nums.splice(index, repeat)
    return nums.length

};

const nums = [28, 2, 20, 19, 18, 12, 14, 22, 14, 4, 15, 25, 27, 26, 11, 26, 4, 18, 12, 9, 7, 29, 29, 22]

const value = 4
console.log(removeElement(nums, value))