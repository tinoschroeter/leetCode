/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    
    
    const pos = nums.filter(item => item > 0);
    const neg = nums.filter(item => item < 0);
    
    return pos.length > neg.length ? pos.length : neg.length;
};