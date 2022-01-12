/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const targets = {}
    
    for(let i = 0; i<nums.length; i++) {
        const reducer = target - nums[i]
        
        if(targets.hasOwnProperty(reducer)) {
            return [targets[reducer], i]
        } else {
            targets[nums[i]] = i
        }
    }
    return []
};