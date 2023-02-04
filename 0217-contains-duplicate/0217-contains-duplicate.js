/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    
    const map = {};
    
    for(let val of nums) {
        if(map[val]) {
            return true
        } else {
            map[val] = true
        }
    }
    
    return false;
};