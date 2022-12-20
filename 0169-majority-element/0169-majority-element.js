/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   
    
    let max = [0, 0];
    const count = {};
    
    for(let i = 0; i<nums.length; i++) {
        
        const val = nums[i];
        
        if(count[val]) {
            count[val] += 1
        } else {
            count[val] = 1;
        }
        
        if(count[val] > max[1]) {
            max[0] = val;
            max[1] = count[val];
        }
    }
    
    return max[0];
};