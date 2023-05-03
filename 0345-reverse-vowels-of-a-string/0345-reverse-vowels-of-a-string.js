/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(str) {
    
    const s = str.split("");
    
    const map = {
        a: true, A: true,
        e: true, E: true,
        i: true, I: true,
        o: true, O: true,
        u: true, U: true
    }
    
    
    let l = 0, r = s.length -1;
    
    while(l<r) {
        if(!map[s[l]]) l++
        if(!map[s[r]]) r--
        
        if(map[s[l]] && map[s[r]]) {
            
            const temp = s[l];
            s[l] = s[r];
            s[r] = temp
            
            l++
            r--
        }
    }
    
    return s.join("");
};