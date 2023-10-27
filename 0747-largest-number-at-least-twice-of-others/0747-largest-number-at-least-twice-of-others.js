/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const max = Math.max(...nums);
    const index = nums.indexOf(max);
    
    for(let i = 0; i<nums.length; i++) {
        const val = nums[i] * 2;
        
        if(val <= max || i === index) {
            continue
        } else {
            return -1
        }
    }
    
    return index;
};