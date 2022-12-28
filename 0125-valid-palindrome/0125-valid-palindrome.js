/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const str = s.replace(/[^a-z0-9]/ig, '');
     
    let left = 0, right = str.length-1;
    
    while(left<right) {     
        if(str[left].toLowerCase() !== str[right].toLowerCase()) return false
        
        left++, right--
    }
    
    return true;
};