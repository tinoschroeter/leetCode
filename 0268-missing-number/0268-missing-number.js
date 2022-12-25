/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let min = 0;
    let max = 0
    const map = {}
    
    for(let val of nums) {
        min = Math.min(min, val);
        max = Math.max(max, val);
        map[val] = true
    }
    
    for(let i = min; i<=max; i++) {
        if(!map[i]) return i
    }
    
    return max + 1
};