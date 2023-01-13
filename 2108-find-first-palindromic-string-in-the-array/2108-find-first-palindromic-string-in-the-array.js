/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    const palindrome = str => {
        
        let l = 0, r = str.length - 1;
        while(l<r) {
            if(str[l] === str[r]) {
                l++
                r--
            } else {
                return false
            }
        }
        return true
    }
    
    
    for(let s of words) {
        
        if(palindrome(s)) return s;
    }
    
    return ""
};