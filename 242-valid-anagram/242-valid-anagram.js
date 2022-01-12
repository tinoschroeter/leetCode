/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false
    
    const hashString = {}
    
    for(let val of s) {
        hashString[val] ? hashString[val] += 1 : hashString[val] = 1 
    }
    
    for(let val of t) {
        if(hashString[val]) {
            hashString[val] -= 1
        } else {
            return false
        }
    }
    return true
};