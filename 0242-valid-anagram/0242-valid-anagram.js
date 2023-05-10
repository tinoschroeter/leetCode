/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false
    
    const counter = {};
    s.split("").map(item => {
        counter[item] ? counter[item] += 1 : counter[item] = 1
    });
    
    for(let item of t) {
        if(counter[item]) {
            counter[item] -= 1
        } else {
            return false
        }
    }
    
    return true;
};