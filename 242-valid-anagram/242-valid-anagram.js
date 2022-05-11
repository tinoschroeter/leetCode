/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    
    if(s.length !== t.length) return false
    
    const counter = {};
        
    for(let val of s) {
        counter[val] ? counter[val] += 1 : counter[val] = 1;
    }
    
    for(let val of t) {
        if (counter[val]) {
            counter[val] -= 1
        } else {
            return false;
        }
    }
    
    return true;
};