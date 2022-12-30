/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    
    const counter = [];
    
    for(let val of nums) {
        
        if(counter[val]) {
            return val
        } else {
            counter[val] = true
        }
    }
    
    return -1;
};