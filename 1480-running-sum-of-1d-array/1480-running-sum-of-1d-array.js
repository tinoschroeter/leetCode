/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    const result = [];
    let count = 0;
    
    for(let val of nums) {
        count += val
        result.push(count);
    }
    
    return result;
};