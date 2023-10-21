/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    
    
    let result = init;
    
    for(let i = 0; i<nums.length; i++) {
        const val = nums[i];
        
        result = fn(result, val);
    }
    
    return result;
};