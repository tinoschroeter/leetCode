/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    const result = [];
    nums.forEach(item => {
        result[item] ? result[item].push(item) : result[item] = [item];  
    })
    
    result.flat().forEach((item, i) => nums[i] = item);
};