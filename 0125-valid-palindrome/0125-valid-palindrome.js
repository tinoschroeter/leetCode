/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    
    const str = s.replace(/[^0-9a-zA-Z]/g, '').split('').map(a => a.toLowerCase()).join('');
    
    let left = 0;
    let right = str.length -1;
    
    while(left < right) {
        
        if(str[left] === str[right]) {
            left++
            right--
        } else {
            return false;
        }
    }
    
    return true
};