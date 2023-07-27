/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    const result = [];
    
    s.trim().split(" ").forEach(item => {
        if(/^[a-zA-Z0-9]+$/.test(item)) {
            result.unshift(item);
        }
    })
    
    return result.join(" ");
};