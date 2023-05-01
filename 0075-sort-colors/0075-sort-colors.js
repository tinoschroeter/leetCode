/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    const bucket = [];
    
    nums.forEach(item => {
        bucket[item] ? bucket[item].push(item) : bucket[item] = [item];
    })
    
    bucket.flat().map((item, i) => nums[i] = item);
};