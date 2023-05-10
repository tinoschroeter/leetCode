/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   
    const counter = {};
    
    for(let val of nums) {
        counter[val] ? counter[val] += 1 : counter[val] = 1;
    }
    
    for(let val of nums) {
        if(counter[val] === 1) return val;
    }
};