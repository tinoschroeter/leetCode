/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    
    if(s.length !== t.length) return false;
    const map = {};
    
    s.split('').forEach(item => {
        map[item] ? map[item] += 1 : map[item] = 1;
    })
    
     for(let item of t.split('')) {
        if(map[item]) {
            map[item] -= 1;
        } else {
            return false;
        }
    }
    
    return true;
};