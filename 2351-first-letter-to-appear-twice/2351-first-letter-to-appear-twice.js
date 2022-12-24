/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    
    const map = new Map();
    
    for(let val of s) {
        
        if(map.has(val)) return val
        map.set(val, true);
    }
};