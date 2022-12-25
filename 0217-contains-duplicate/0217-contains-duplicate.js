/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   
    
    const map = {};
    
    for(let val of nums) {
        map[val] ? map[val] += 1 : map[val] = 1
    }
    
    for(let val of nums) {
        if(map[val] > 1) return true
    }
    
    return false;
};