/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    
    const set = {};
    let max = 0;
    
    for(let val of nums) {
        set[val] = true;
    }
    
    for(let val of nums) {
        if(!set[val -1]) {
            let count = val
            let tmpmax = 0;
            while(set[count++]) {
                tmpmax++
            }
            max = Math.max(max, tmpmax);
        }
    } 
    
    return max;
};