/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  
    const map = {};
    
    if(s.length !== t.length) return false;
    
    s.split("").forEach(item => {
        map[item] ? map[item] += 1 : map[item] = 1;
    });
    
    for(let val of t.split("")) {
        if(map[val]) {
            map[val] -= 1
        } else {
            return false
        }
    }
    
    return true;
};