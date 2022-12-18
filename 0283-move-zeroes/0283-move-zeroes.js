/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    
    
    const zeros = [];
    const nonZeros = [];
    
    for(let i = 0; i<nums.length; i++) {
        
        const val = nums[i];
        
        if(val === 0) {
            zeros.push(0)
        } else {
            nonZeros.push(val)
        }
    }
    
    [...nonZeros, ...zeros].map((v, i) => {        
        nums[i] = v;
    }) ;
};