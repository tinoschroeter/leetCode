/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if(x < 0) return false;
    
    const num = x.toString().split('');
    
    let l = 0, r = num.length -1;
    
    while(l<=r) {
        if(num[l] === num[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    
    return true;
};