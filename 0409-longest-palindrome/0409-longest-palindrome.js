/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    const counter = {};
    let max = 0
    let odd = false
    
    for(let val of s) {
        counter[val] ? counter[val] += 1 : counter[val] = 1;
    }
    
    for(let val in counter) {
        if(counter[val] % 2 === 0) {
            max += counter[val]
        } else {
            odd = true
            max += counter[val] -1;
        }
    }
    
    if(odd) max++
    return max;
};