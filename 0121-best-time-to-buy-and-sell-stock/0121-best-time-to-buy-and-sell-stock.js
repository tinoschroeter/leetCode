/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let max = 0;
    let l = 0, r = 1;
    
    while(r<prices.length) {
        const prof = prices[r] - prices[l]; 
        max = Math.max(prof, max);
        
        if(prices[l] > prices[r]) {
            l=r
        }
        
        r++
    }
    
    return max
};