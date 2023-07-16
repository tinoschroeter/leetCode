/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    
    if(s.length !== t.length) return false;
    const obj = {};

    s.split("").forEach(item => obj[item] ? obj[item] += 1 : obj[item] = 1);

    for(let val of t.split("")) {
        if(obj[val]) {
            obj[val] -= 1;
        } else {
            return false;
        }
    }
    
    return true;
};