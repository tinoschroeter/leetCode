/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    
    const map = new Map();
    
    nums.forEach(item => { 
        if(item > 0) map.set(item, true)
    })
    
    const result = [];
    
    nums.forEach(item => {
        if(item < 0 && map.has(Math.abs(item))) {
            result.push(Math.abs(item))
        }
    })
    
    if(result.length === 0) return -1;
    
    return result.sort((a, b) => b - a)[0];
};