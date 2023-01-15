/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    const zero = [];
    const noneZero = nums.filter(item => {
        if(item !== 0) {
            return true;
        } else {
            zero.push(0)
            return false;
        }
    });
    

    const result = [...noneZero, ...zero];
    
    result.forEach((val, i) => {
        nums[i] = result[i]
    })
    
    return nums;
};