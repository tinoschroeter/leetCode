/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    const count = {};
    
    for(let val of nums) {
        count[val] ? count[val] += 1 : count[val] = 1;
        }
    
    for(let val of nums) {
        if(count[val] === 1) return val;
    }
};