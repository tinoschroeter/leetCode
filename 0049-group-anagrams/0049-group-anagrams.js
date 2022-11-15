/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs)  {
    
    const map = {};
    
    const getKey = (k) => k.split('').sort().join('');
    
    for(let i = 0;i<strs.length; i++) {
        
        const key = getKey(strs[i]);
        
        if(!map[key]) map[key] = [];
    }
    
    for(let i = 0;i<strs.length; i++) {
        
        const key = getKey(strs[i]);  
        
        map[key].push(strs[i]);          
    }
    
    
    return Object.values(map);
};