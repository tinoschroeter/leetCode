/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const map = {};
    
    
    for(let val of strs) {
        
        const key = val.split('').sort().join('');
        
        map[key] ? map[key].push(val) : map[key] = [val];
    }
    
    
    return Object.values(map)
};