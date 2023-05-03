/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    const map = {};
    
    nums.map(item => map[item] = true);
    let i = 0
    
    for(; i<nums.length; i++) {
        
        if(!map[i]) return i
    }
    
    return i;
};