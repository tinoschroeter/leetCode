/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const map = {};
    
    for(let i = 0; i<nums.length; i++) {
        const val = nums[i];
        
        if(map[val]) {
            return true
        } else {
            map[val] = true;
        }
    }
    
    return false;
};