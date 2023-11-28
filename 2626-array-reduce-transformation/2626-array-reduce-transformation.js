/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    
    
    let res = init;
    
    for(let val of nums) {
        res = fn(res, val);
    }
    
    return res;
};