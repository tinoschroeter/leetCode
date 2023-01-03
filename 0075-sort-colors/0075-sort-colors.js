/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    
    const color = {};
    
    for(let val of nums) color[val] ? color[val] += 1 : color[val] = 1;
    
    for(let i = 0; i<nums.length; i++) {
        
        if(color[0]) {
            nums[i] = 0
            color[0] -= 1;
        } else if(color[1]) {
            nums[i] = 1;
            color[1] -= 1;
        } else if(color[2]) {
            nums[i] = 2;
            color[2] -= 1;
        }
    }
    
    return nums;
};