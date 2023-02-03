/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    const count = new Set();
    
    for(let val of nums) {
        if(count.has(val)) return val
        count.add(val)
    }
};