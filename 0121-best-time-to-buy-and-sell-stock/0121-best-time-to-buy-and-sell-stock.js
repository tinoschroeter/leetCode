/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    
    let idx = 0; 
    let sum = 0;
    
    for(let i = 1; i<prices.length; i++) {
        
        if(prices[idx] > prices[i]) idx = i;
              
        sum = Math.max((prices[i] - prices[idx]), sum)
    }
    
    return sum;
};