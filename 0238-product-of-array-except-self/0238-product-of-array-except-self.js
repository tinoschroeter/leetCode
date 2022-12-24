/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   
    const result = [];
    
    for(let i = 0; i<nums.length; i++) {
        
        let idx = 0;
        let sum = 1;
        
        while(idx<nums.length) {
            
            if(i !== idx) {
                sum *= nums[idx];
            }
            idx++   
        }
        result.push(sum);
    }
    
    return result;
};