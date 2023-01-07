/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    

    let stack = []
    
    for(let val of nums) {
        if(val === 2) stack.push(2)    
    }
    
    for(let val of nums) {
        if(val === 1) stack.push(1)
    }
    
    for(let val of nums) {
        if(val === 0) stack.push(0)
    }
    
    
    for(let i = 0; i<nums.length; i++) {
        
        nums[i] = stack.pop();
    }
};