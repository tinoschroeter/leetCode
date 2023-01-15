/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    
    const map = {};
    
    s.split('').forEach(item => map[item] ? map[item] += 1 : map[item] = 1);
    
    for(let item of t.split('')) {
        if(map[item]) {
            map[item] -= 1
        } else {
            return false
        }
    }
    
    for(let val in map) {
        if(map[val]) return false;
    }

    return true
};