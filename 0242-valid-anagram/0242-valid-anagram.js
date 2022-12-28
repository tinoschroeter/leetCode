/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false
    
    const map = {}
    
    for(let val of s) {    
        map[val] ? map[val] += 1 : map[val] = 1
    }
    
    for(let val of t) {
        if(map[val]) {
            map[val] -= 1   
        } else {
            return false
        }
    }
    
    return true
};