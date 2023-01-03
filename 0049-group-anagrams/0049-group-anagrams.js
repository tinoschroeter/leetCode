/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    
    const map = {};
    const result = [];
    
    for(let val of strs) {
        
        const sStr = val.split('').sort().join('');
        if(map[sStr]) {
            map[sStr].push(val)
        } else{
            map[sStr] = [val]
        }
    }
    
    for(val in map) {
        result.push(map[val])
    }
    
    return result;
};