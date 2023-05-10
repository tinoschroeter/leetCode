/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const set = new Set();
    
    nums.forEach(item => set.add(item));
    return nums.length !== set.size;
};