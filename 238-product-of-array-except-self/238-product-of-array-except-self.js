/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    
    const result = [];

    for(let i = 0; i<nums.length; i++) {
        
        let product = 1;
        for(let j = 0; j<nums.length; j++) {
            if(i !== j) {
                product *= nums[j]
            }               
        }
        
        result[i] = product;
    }
    
    return result;
};