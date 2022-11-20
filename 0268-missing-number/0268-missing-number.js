/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    
    const map = {};
    
    nums.forEach(item => {
        if(!map[item]) map[item] = true;
    })
    
    for(let i = 0; i<nums.length + 1; i++) {
        if(!map[i]) return i;
    }
};