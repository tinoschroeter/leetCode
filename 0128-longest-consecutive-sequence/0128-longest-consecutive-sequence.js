/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  
    const map = {};
    
    for(let val of nums) {
        map[val] = true;
    };
    
    let max = 0;
    
    for(let val of nums) {
        
        if(!map[val -1]) {
            
            let tmp = 0;
            
            while(map[val++]) {
                tmp++;
                max = Math.max(max, tmp);
            }
        }
    }
    
    return max;
};