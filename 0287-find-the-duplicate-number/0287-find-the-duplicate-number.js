/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    
    const map = {}
    let idx = 0;
    
    while(idx < nums.length) {
        
        if(map[nums[idx]]) return nums[idx]
        map[nums[idx]] = true
        idx++
    }
};