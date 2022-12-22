/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    let max = 0;
    let plusOne = false
    const counter = {};
    
    
    for(let val of s) {
        counter[val] ? counter[val] += 1 : counter[val] = 1
    }
    
    for(let key in counter) {
        
        if(counter[key] % 2 === 0) {
            max += counter[key]
        } else {
            plusOne = true
            max += counter[key] - 1;
        }
    }

    if(plusOne) max++

    return max;
};