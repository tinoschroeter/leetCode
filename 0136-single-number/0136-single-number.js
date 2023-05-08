/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    const map = {};
    nums.map(item => map[item] ? map[item] += 1 : map[item] = 1);
    return nums.filter(item => map[item] === 1)[0];
};