/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const nums = [1, 3, 5, 6]
const target = 5
var searchInsert = function (nums, target) {

    let i = 0
    while (nums.length > i) {
        if (nums[i++] >= target) return --i
    }
    return nums.length
};

console.log(searchInsert(nums, target))