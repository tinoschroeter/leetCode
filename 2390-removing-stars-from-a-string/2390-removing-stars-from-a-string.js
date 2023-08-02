/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    
    
    const stack = [];
    
    
    s.split("").forEach(item => {
        
        if(item === "*") {
            stack.pop()
        } else {
            stack.push(item)
        }
    })
    
    return stack.join("");
};