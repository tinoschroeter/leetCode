/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const map = {}
    
    for(let i = 0; i<nums.length; i++) {
        
        const val = nums[i];
        map[val] ? map[val] += 1 : map[val] = 1;
    }
    
    return Object.values(map).some(item => item >1);
}