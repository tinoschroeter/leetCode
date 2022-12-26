/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    const numbers = [];
    
    for(let i = 0;i<nums.length; i++) {
        if(nums[i] !== 0) numbers.push(nums[i])
    }
    
    for(let i = 0;i<nums.length; i++) {
        
        if(i < numbers.length) {
            nums[i] = numbers[i];
        } else {
            nums[i] = 0;
        }   
    }    
};