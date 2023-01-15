/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    const map = {};
    
    nums.forEach(item => map[item] = true);
    
    
    for(let num = 0; num<nums.length +1; num++) {
        if(!map[num]) return num;
    }
};