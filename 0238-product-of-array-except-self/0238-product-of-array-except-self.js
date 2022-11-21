/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    const result = [];
    
    for(let i = 0; i<nums.length; i++) { //O(n^2)
    
        let sum = 1;
        for(let j = 0; j<nums.length; j++) {
            
            if(j !== i) sum *= nums[j] 
        }
        result.push(sum);
    }
    
    return result;
};