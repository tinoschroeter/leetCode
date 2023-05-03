/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {};
    
    s.split("").forEach(item => map[item] ? map[item] += 1 : map[item] = 1);
    
    for(let i = 0; i<s.length; i++) {
        const item = s[i];
        console.log(item);
        if(map[item] && map[item] === 1) {
            return i;
        }
    }
 
    return -1
};