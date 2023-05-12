/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    
    const counter = {};
    nums.map(item => counter[item] ? counter[item] += 1 : counter[item] = 1);
    
    const unique = nums.filter(item => counter[item] === 1);
    
    return unique.reduce((akk, val) => akk += val, 0);
};