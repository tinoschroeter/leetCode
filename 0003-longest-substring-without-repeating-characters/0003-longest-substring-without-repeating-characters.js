/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    if(s.length === 1) return 1;
    if(s.length === 0) return 0;
    
    const set = new Set();
    let l = 0;
    let r = 1;
    let max = 1;
    
    set.add(s[l])
    
    while(r<=s.length -1) {       
        if(set.has(s[r])) {
            set.delete(s[l]);
            l++
        } else {
            set.add(s[r])
            r++
        }
        max = Math.max(max, (r-l));
    }
    
    return max;
}