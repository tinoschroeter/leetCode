/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    const numbers = nums.sort((a,b) => a -b);
    const result = [];
    const set = new Set()
    
    for(let i = 0; i<numbers.length; i++) {
        
        let l = i + 1, r = numbers.length -1;
        
        while(l<r) {    
            const sum = numbers[i] + numbers[l] + numbers[r];
            
            if(sum === 0) {
                const val = numbers[i].toString() + numbers[l].toString() + numbers[r].toString();
                
                if(!set.has(val)) {
                    result.push([numbers[i], numbers[l], numbers[r]]);
                    set.add(val);
                }
            }
            
            (sum > 0) ? r-- : l++;
        }
    }
    
    return result;
};