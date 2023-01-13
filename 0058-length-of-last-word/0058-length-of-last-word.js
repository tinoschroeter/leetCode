/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
 
    const arr = s.split(' ')
    
    const str = arr.filter(item => item.length > 0);
    return str[str.length -1].length;

};