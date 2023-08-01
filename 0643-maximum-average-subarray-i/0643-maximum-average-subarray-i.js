/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    
    let max = 0;
    let tmp = 0;
    
    for(let i = 0; i<k; i++) {
        tmp += nums[i];
    }
    
    let l = 0, r = k;
    max = tmp;
    
    while(r< nums.length) {
        
        tmp -= nums[l];
        tmp += nums[r];
        
        max = Math.max(max, tmp);
        
        l++
        r++
    }
    
    return max / k;
};