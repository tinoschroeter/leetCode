/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    const numbers = {};
    
    for(let i = 0; i<nums.length; i++) {
        const n = nums[i];
        if(!numbers[n]) numbers[n] = true;
    }
    
    for(let i = 1; i<nums.length + 1; i++) {
        
        if(!numbers[i]) return i
    }
    
    return 0;
};