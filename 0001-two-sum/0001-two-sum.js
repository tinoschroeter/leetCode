/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const counter = new Map();
    
    for(let i = 0; i<nums.length; i++) {
        
        const diff = target - nums[i];
        
        if(counter.has(diff)) return [counter.get(diff), i];
        counter.set(nums[i], i)
    }
    
    return [-1,-1]
};