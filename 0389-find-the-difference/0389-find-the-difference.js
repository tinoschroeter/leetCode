/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    const map = {};
    
    const add = item => map[item] ? map[item] += 1 : map[item] = 1;
    
    s.split("").map(item => add(item));
    t.split("").map(item => add(item));
    
    console.log(map);
    for(let i in map) {
        if(map[i] % 2 !== 0) return i
    }
    
    return "";
};