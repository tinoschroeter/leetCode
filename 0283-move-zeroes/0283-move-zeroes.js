/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    const numbers = [];
    
    for(let val of nums) {
        if(val !== 0) numbers.push(val)
    }

    for(let i = 0; i<numbers.length; i++) {
        nums[i] = numbers[i];
    }
    
    for(let i = numbers.length;i<nums.length;i++) {
        nums[i] = 0;
    }
};