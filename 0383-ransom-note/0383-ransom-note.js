/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    
    
    const char = {};
    
    for(let i = 0; i<magazine.length; i++) {
        
        char[magazine[i]] ? char[magazine[i]] += 1 : char[magazine[i]] = 1;
    }
    
    
    for(let i = 0; i<ransomNote.length; i++) {
        
        const c = ransomNote[i]
        
        if(char[c]) {
            char[c] -= 1
        } else {
            return false
        }
    }
    
    return true;
    
};