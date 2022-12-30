/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    
    let l = 0;
    let max = 0;
    let mostCommon = 0;
    const charCounter = {}
    
    
    for(let r = 0;r<s.length; r++) {
        
        charCounter[s[r]] ? 
            charCounter[s[r]] += 1 : 
            charCounter[s[r]] = 1;
        
        mostCommon = Math.max(mostCommon, charCounter[s[r]]);
        
        if(r - l + 1 - mostCommon>k) {
            charCounter[s[l]] -= 1
            l++
        }
        
        max = Math.max(max, r - l + 1);
    }
    
    return max;
}