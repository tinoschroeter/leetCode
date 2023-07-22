/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    
    const map = {};
    
    s.split("").forEach(item => {
        map[item] ? map[item] += 1 : map[item] = 1
    })
    
    for(let val of t.split("")) {
        if(map[val]) {
            map[val] -= 1
        } else {
            return val
        }
    }
};