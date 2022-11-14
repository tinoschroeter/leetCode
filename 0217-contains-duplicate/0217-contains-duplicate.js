/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const mem = new Map();
    
    for(let i = 0; i<nums.length; i++) {
        
        if(mem.has(nums[i])) return true;
           
        mem.set(nums[i]);
    }
    
    return false;
};