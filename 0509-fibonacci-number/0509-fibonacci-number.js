/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
    
    // 0 1 1 2 3 5 ...
    if(n === 0) return 0
    if(n === 1) return 1
    if(n === 2) return 1
    
    return fib(n -1) + fib(n -2);
};