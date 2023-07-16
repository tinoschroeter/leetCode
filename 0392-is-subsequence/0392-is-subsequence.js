/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    const count = [...s.split("")];
    
    t.split("").forEach(item => {
        if(count[0] === item) count.shift();
    })
    
    return count.length === 0 ? true : false;
};