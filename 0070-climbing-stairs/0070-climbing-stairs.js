/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    const mem = {
        1: 1,
        2: 2,
        3: 3
    }
    
    const result = (val) => {
        if(mem[val]) return mem[val];
        return mem[val] = result(val-2) + result(val-1);
    }
    
    return result(n);
}