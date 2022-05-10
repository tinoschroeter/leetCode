/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    
    
    let maxArray = -Infinity;
    let currentSum = 0;
    
    for(let i = 0; i<nums.length; i++) {
        
        const value = nums[i];
        
        currentSum += value
        
        if(currentSum > maxArray) {
            maxArray = currentSum
        }
        
        if(currentSum <= 0) {
            currentSum = 0;
        }
    }
    
    return maxArray;
};