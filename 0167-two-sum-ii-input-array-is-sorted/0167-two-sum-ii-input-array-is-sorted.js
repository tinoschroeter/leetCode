/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let l = 0, r = numbers.length -1;
    
    while(l<r) {
        
        const add = numbers[l] + numbers[r];
        if(add === target) return [l + 1, r + 1];
        
        if(add > target) {
            r--
        } else {
            l++
        }
    }
};