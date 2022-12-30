/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
      
    let l = 0, r = nums.length -1;
    
    while(l<=r) {
        
        
        const mid = Math.round((l + r) / 2);
        
        if(nums[mid] === target) return mid
        
        if(target < nums[mid]) {
            r =  mid -1;
        } else {
            l = mid + 1;
        }
    }
    
    return -1
}