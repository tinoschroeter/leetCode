/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    
    const strip = s.replaceAll(/[^a-zA-Z0-9]/g,"").toLowerCase();
    
    
    let l = 0, r = strip.length -1;
    
    while(l<r) {
        if(strip[l] === strip[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    
    return true;
};