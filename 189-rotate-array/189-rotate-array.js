/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {      
    
    const tempArray = [];
    
    for(let i = 0; i<nums.length; i++) {
        const index = (i + k) % nums.length;
        tempArray[index] = nums[i];
    }
    
    for(let i = 0; i<tempArray.length; i++) {
        nums[i] = tempArray[i];
    }
};