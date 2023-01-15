/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
   
    
    const even = nums.filter(item => item % 2 === 0);
    
    const map = {};
    even.forEach(item => map[item] ? map[item] += 1 : map[item] = 1);
    
    
    let max = [-Infinity, -1];
    
    for(let key in map) {
        
        if(max[0] < map[key]) {
            max[0] = map[key];
            max[1] = key;
        }
    }
    
    return max[1];
    
};