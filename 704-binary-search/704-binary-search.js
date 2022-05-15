/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    
    let l = 0;
    let r = nums.length -1;
    
    while(l <= r) {
        
        const mid = Math.round((l + r) / 2);
        const val = nums[mid];
        
        if(target === val) return mid;
        
        target < val ? r = mid -1 : l = mid + 1;
    }
    
    return -1;
};