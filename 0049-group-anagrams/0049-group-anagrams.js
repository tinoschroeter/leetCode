/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const map = {};
    
    for(let val of strs) {
        const sort = val.split('').sort().join('');
        
        if(map[sort]) {
            map[sort].push(val)
        } else {
            map[sort] = [val]
        }
    }
    
    const result = [];
    
    for(let val in map) {
        result.push(map[val]);
    }
    
    return result;
};