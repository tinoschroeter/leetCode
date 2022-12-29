/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    
    
    // 1 2 3 4
   //  4 3 2 1
    
    const result = [];
    
    for(let i = 0; i<nums.length; i++) {
        
        let prod = 1;
        for(let j =0; j<nums.length; j++) {
            if(i !== j) {
                prod *= nums[j]
            }
        }
        
        result.push(prod)
    }
    
    return result;
};