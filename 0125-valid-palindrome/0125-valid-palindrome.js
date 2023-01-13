/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    
    const str = s.replace(/[\W_]+/g,"").toLowerCase();
    
    let l = 0, r = str.length -1;
    
    while(l<r) {
        
        if(str[l] === str[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    return true;
};