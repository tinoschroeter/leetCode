/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    
    
    let result = init;
    
    for(let val of nums) {
        result = fn(result, val);
    }
    
    return result;
};