/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    const mem = {
        '0': 1,
        '1': 1,
        '2': 2
    }
    
    let i = 0
    
    while(i <= n) {
        
      if(!mem[i]) {  
        const sum = mem[i - 1] + mem[i - 2];
        mem[i] = sum; 
        console.log(mem)
      }
      i++
    }
    return mem[n]
};