/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
      
    if(s.length === 0) return 0;
    if(s.length === 1) return 1;
      
    const set = new Set();
    
    let left = 0;
    let right = 1;
    let max = 1;
    
    set.add(s[left]);
    
    while(right<=s.length -1) {
        
        if(set.has(s[right])) {
            set.delete(s[left])
            left++
        } else {
            set.add(s[right])
            right++
        }
        
        max = Math.max(max, (right - left))
    }
    
    return max;
};