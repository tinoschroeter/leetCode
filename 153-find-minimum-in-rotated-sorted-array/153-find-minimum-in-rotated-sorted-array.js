/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {    
    // O(n log n)
    return nums.sort((a, b) => a - b)[0]
};
