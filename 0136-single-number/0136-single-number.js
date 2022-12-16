/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
      
    const map = {};
    
    for(let i = 0; i<nums.length; i++) {
        const val = nums[i];
        map[val] ? map[val] += 1 : map[val] = 1;
    }
    
    return Object.keys(map).filter(item => map[item] === 1);
};