/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // O(n log n)
    return nums.map(a => a*a).sort((a,b)=>a-b);
};