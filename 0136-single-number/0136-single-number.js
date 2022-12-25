/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
       
    // time O(n)
    // space O(1) ???
    
    
    const map = {};
    
    for(let val of nums) {
        map[val] ? map[val] += 1 : map[val] = 1;
    }
    
    for(let val of nums) {
        if(map[val] === 1) {
            return val
        }
    }
};