/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    
    const prod = nums.reduce((akk, val) => akk * val, 1);
    
    console.log(prod);
    if(prod > 0) return 1;
    if(prod < 0) return -1;
    
    return 0;
};