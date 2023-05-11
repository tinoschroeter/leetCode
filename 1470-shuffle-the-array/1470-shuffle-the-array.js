/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    
    const result = [];
    
    let i = 0;
    
    while(n<nums.length) {
        
        result.push(nums[i]);
        result.push(nums[n]);
        
        i++
        n++
    }
    
    return result;
};