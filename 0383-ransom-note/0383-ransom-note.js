/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    
    const counter = {};
    let count = 0
    
    for(let val of magazine) {
        if(counter[val]) {
          counter[val] += 1  
        } else { 
            counter[val] = 1;
        }
        count++
    }
    
    
    for(let val of ransomNote) {
        if(counter[val]) {
            counter[val] -= 1
            count--
        } else {
            return false
        }
    }
    
    return true
};