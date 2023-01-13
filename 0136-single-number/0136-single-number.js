/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    const map = {};
    
    nums.forEach(val => {
        map[val] ? map[val] += 1 : map[val] = 1;
    })
    
    return nums.filter(item => map[item] === 1)[0];
};