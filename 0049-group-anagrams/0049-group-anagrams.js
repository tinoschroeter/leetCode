/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const map = {};
    
    strs.forEach(item => {
        const sorted = item.split('').sort().join(''); 
        map[sorted] ? map[sorted].push(item) : map[sorted] = [item];
    });
    
    
    return Object.values(map);
};