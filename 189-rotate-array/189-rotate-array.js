/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {      
    
    const tmpArray = [];
    
    for(let i = 0; i<nums.length; i++) {
        const index = (i + k) % nums.length;
        tmpArray[index] = nums[i];
    }
    
    for(let i = 0; i<tmpArray.length; i++) {
        nums[i] = tmpArray[i];
    }
};