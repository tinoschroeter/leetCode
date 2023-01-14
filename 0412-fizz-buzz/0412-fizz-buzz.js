/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    const result = [];
    
    for(let val = 1; val<=n; val++) {
        if(val % 3 === 0 && val % 5 === 0) {
            result.push("FizzBuzz")
        } else if(val % 3 === 0) {
            result.push("Fizz");
        } else if(val % 5 === 0) {
            result.push("Buzz")
        } else {
            result.push(val.toString())
        }
    }
    
    return result;
};