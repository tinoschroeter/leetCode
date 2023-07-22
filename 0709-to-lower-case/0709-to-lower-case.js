/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    
    let str = "";
    for(let val of s) str += val.toLowerCase()
    
    return str;
};