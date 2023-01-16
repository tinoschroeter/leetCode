/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let l = 0, r = numbers.length -1;
    
    while(l<r) {
        const val = numbers[l] + numbers[r];
        if(val === target)  return [l+1, r+1];
        
        (target < val) ? r-- : l++
    }
    
    return []
};