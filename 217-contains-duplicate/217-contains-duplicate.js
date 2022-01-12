/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const counter = {}
    
    for(let val of nums) {
        if(counter[val]) return true
        counter[val] = true
    }
    return false
};

// 1123