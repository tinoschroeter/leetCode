/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    let max = 0;
    
    const set = new Set();
    
    for(let i = 0; i<nums.length; i++) {
        const val = nums[i];
        set.add(val);
    }
    
    let idx = 0;
    
    while(idx < nums.length) {
        
        let val = nums[idx];
        
        let tmpMax = 0;
        if(!set.has(val - 1)) {
            while(set.has(val)) {
                val += 1
                tmpMax++
                max = Math.max(tmpMax, max);
            }
        }
        idx++
    }
    
    return max;
};