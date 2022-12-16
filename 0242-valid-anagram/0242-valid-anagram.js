/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
        
    const words = {};
    let count = 0;
    
    for(let i = 0; i<s.length; i++) {
        const val = s[i];
        words[val] ? words[val] += 1 : words[val] = 1;
        count++
    }
    
    for(let i = 0; i<t.length; i++) {
        
        const val = t[i];
        if(words[val]) {
            words[val] -= 1
            count--
        } else {
            return false
        }
    }
    
    return (count === 0) ? true : false;
};