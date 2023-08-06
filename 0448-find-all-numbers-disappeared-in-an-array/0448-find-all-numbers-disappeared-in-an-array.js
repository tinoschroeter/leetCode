/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    const numbers = {};
    const result = [];
    
    nums.forEach(item => {
        numbers[item] = true;
    })
    
    for(let i = 1; i<nums.length + 1; i++) {
        if(!numbers[i]) result.push(i)
    }
    
    return result;
};