/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    const counter = {};
    let count = 0;
    for(let val of s) {
        counter[val] ? counter[val] += 1 : counter[val] = 1;
        count++
    }
    
    for(let val of t) {
        if(counter[val]) {
            counter[val] -= 1
            count--
        } else {
            return false;
        }
    }
    
    return count === 0
};