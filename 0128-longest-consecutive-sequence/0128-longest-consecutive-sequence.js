/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    const map = {};
    
    for(let val of nums) {
        map[val] ? map[val] += 1 : map[val] = 1;
    } 
    
    let max = 0;
    
    for(let val of nums) {
        
        if(!map[val -1]) {
            let seq = val;
            let counter = 1;
            
            while(map[seq]) {
                max = Math.max(max, counter);
                seq++
                counter++
            }
        }
    }
    
    return max;
};