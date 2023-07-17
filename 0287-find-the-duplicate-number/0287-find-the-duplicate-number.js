/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    const map = new Map();
    
    for(let val of nums) {
        
        if(!map.has(val)) {
            map.set(val, true)
        } else {
            return val
        }
    }
};