/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
     
    const stack = [];
    
    const map = new Map();
        map.set("(", ")")
            .set("[", "]")
            .set("{", "}");
    
    
    for(let val of s) {
        
        if(map.has(val)) {
            stack.push(map.get(val));
        } else {
            const parenthes = stack.pop();
            if(parenthes !== val) return false;
        }
    }
    
    return stack.length === 0;
};