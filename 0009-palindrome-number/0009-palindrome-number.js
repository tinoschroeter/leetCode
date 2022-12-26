/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    const str = x.toString();
    
    let l = 0, r = str.length -1;
    
    
    while(l<r) {
        if(str[l] !== str[r]) {
            return false
        }
        l++
        r--
    }
    
    return true
};