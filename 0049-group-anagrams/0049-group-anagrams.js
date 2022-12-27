/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const uniq = {};
    const result =  [];
    
    for(let val of strs) {
        const sorted = val.split('').sort().join('');
        if(!uniq[sorted]) {
            uniq[sorted] = []
            uniq[sorted].push(val)
        } else {
            uniq[sorted].push(val)
        }
    }
    
    
    for(let key in uniq) {
        result.push(uniq[key]);
    }
    
    return result;

};