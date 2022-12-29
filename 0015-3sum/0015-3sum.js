/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
     
    const result = [];
    const numsS = nums.sort((a, b) => a-b);
    const set = new Set();
    
    for(let i = 0; i<numsS.length; i++) {
        
        let l = i + 1;
        let r = numsS.length -1;
        
        while(l < r) { 
            const sum = numsS[i] + numsS[l] + numsS[r];
            
            if(sum === 0) {
                const val = numsS[i].toString() + numsS[l].toString() + numsS[r].toString();
                
                if(!set.has(val)) {
                    result.push([numsS[i], numsS[l], numsS[r]]);
                    set.add(val)
                }
            } 
            
            if(sum < 0) {
                l++   
            } else {
                 r-- 
            }
        }
    }
    
    console.log(set)
    return result;
};