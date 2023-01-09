/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
   
    
    const result = new Array(temperatures.length).fill(0);
    const stack = [];
    
    
    temperatures.forEach((val, i) => {
        
        while(stack.length && val > stack[stack.length -1][0]) { 
           const  [stackT, stackInd] = stack.pop();
           result[stackInd] = i - stackInd;
            }
         
        stack.push([val, i])
    })
    
    return result;    
};