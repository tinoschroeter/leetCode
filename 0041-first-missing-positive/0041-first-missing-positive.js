/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    const counter = {};
    let max = 0;
    
    nums.filter(item => item > 0).forEach(item => counter[item] = true);
    
    for(let i = 1; i< nums.length +1; i++) {
        
        if(!counter[i]) return i;
        
        max = Math.max(max, i);
    }
    
    return max + 1;
};