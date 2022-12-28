/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
       
    const set = new Set();
    let last = 0;
    
    
    for(let val of nums) {
        set.add(val)
        last = Math.max(val, last)
    }
    
    for(let val of set) {
        if(val !== 0 && !set.has(val -1)) {
          return val -1;  
        } 
    }
    
    return last + 1;
};