/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    
    const removeZero = (arr) => {
        nums = nums.filter(item => item !== 0);
        return Math.min(...arr.filter(item => item !== 0));
    }; 
    
    let count = 0;
    let min  = removeZero(nums);
    
    while(nums.length) {
        for(let i = 0; i<nums.length; i++) {
            nums[i] = nums[i] - min;
        }
        min  = removeZero(nums);
        count++; 
    }
    
    return count;
};