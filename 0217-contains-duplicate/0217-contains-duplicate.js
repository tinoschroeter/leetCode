/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    
    const set = {};
    
    for(let val of nums) {
        if(set[val]) return true
        set[val] = true
    }
    
    return false
};