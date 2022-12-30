/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    const counter = {};
    
    for(let val of nums) {
        counter[val] ? counter[val] += 1 : counter[val] = 1;
    }
    
    return Object.keys(counter).sort((a,b) => counter[b] - counter[a])[0];
};