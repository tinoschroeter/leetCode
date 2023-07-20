/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    
    const map = {};
    
    magazine.split("").forEach(item => {
        map[item] ? map[item] += 1 : map[item] = 1;
    })
    
    
    for(let val of ransomNote) {
        
        if(map[val]) {
            map[val] -= 1
        } else {
            return false
        }
    }
    
    return true;
};