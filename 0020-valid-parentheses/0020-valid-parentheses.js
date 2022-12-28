/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    
    const br = new Map();
        br.set(')', '(');
        br.set('}', '{');
        br.set(']', '[');
    
    const stack = [];
    
    
    let idx = 0;
    while(idx < s.length) {
        
        const val = s[idx]

        if(br.has(val)) {
            const lav = stack.pop()
            
            if(br.get(val) !== lav) {
                return false
            }
        } else {
            stack.push(val)
        }
        
        idx++
    }
    
    return stack.length === 0
};