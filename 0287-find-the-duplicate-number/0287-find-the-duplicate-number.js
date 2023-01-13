/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    const set = new Set();
    let result = -1
    
    nums.forEach(item => {
        if(set.has(item)) result = item;
        set.add(item);
    })
    
    return result;
};