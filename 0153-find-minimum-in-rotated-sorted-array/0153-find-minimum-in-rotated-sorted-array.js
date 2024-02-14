/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  
    let min = Infinity;
    
    for(let i = 0; i<nums.length; i++) {
        
        const val = nums[i];
        if(val < min) min = val;
    }
    
    return min;
};