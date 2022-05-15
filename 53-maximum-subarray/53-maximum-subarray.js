/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    
    let pointer = 0;
    let currentMax = 0;
    let max = -Infinity;
    
    while(pointer < nums.length) {
        
        currentMax += nums[pointer];
        
        max = Math.max(max, currentMax);
        
        if(currentMax <= 0) currentMax = 0;
        pointer++
        
    }
    
    return max;
};