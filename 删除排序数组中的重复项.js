/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    // 逆向循环 用splice
    // const Obj = {}
    // for (let i = nums.length - 1; i >= 0; i--) {
    //     if (Obj[nums[i]] === undefined) {
    //         Obj[nums[i]] = i
    //     } else {
    //         nums.splice(i, 1)
    //     }
    // }
    // return nums.length


    /**思路：双指针 */
    
    // let obj = {}
    // let res = 0
    // let length = nums.length
    // let index = 0
    // while (index < length) {
    //     if (!obj[nums[index]]) {
    //         obj[nums[index]] = true
    //         nums[res] = nums[index]
    //         res++
    //         index++
    //     } else {
    //         if (nums[index] === nums[index - 1]) {
    //             index++
    //         } else {
    //             nums[res] = nums[index + 1]
    //             res++
    //             index++
    //         }

    //     }
    // }
    // return res


    /**
     * 
     * 思路：判断当前指针的值和前一位指针的值，如果相同则指针下移一位，不同则将res+1 ， 赋值nums[res]为指针的的值
     * 因为第一个数一定不重复，可以从第二位开始找
     */

    var len = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) nums[len++] = nums[i];
    }
    return len

};

const aaa = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(aaa))


