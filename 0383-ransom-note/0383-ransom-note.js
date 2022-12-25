/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    const count = {};
    
    for(let val of magazine) {
        count[val] ? count[val] += 1 : count[val] = 1;
    }
    
    for(let val of ransomNote) {
        if(count[val]) {
            count[val] -= 1
        } else {
            return false
        }
    }
    
    return true;
};
