/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  
    const result = [];
    const map = {};
    
    for(let str of strs) {
        const sortStr = str.split('').sort().join('');
        
        if(map[sortStr]) {
            
            map[sortStr].push(str)
        } else {
            map[sortStr] = [];
            map[sortStr].push(str);
        }
    }
    
    for(let key in map) {
        
        result.push(map[key]);
    }
    
    return result;
};