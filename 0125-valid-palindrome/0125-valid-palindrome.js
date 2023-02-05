/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const clean = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    
    console.log(clean)
    let l = 0, r = clean.length -1;
    
    while(l<r) {
        if(clean[l] !== clean[r]) return false
        l++
        r--
    }
    
    return true;
};