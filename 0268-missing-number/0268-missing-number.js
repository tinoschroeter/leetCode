/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    const map = new Map();
    let max = 0;
    
    for(let val of nums) {
        max = Math.max(max, val);
        map.set(val, true);
    }
    
    for(let start = 0; start<max; start++) {
        if(!map.has(start)) return start;
    }  
    
    return max + 1;
};