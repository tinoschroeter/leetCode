/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    const result = [[],[],[]]
        
    nums.forEach(item => {    
        if(item === 0) result[0].push(0)
        if(item === 1) result[1].push(1)
        if(item === 2) result[2].push(2)
    })
    
    result.flat().forEach((item, i) => nums[i] = item);
};